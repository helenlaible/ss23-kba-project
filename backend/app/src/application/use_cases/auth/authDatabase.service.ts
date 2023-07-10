import { randomUUID } from 'crypto';
import status from 'http-status';

import { PasswordHash } from '$application/security/password';
import { AuthServiceFactory } from '$application/use_cases/auth/auth.service';
import { AuthToken } from '$application/security/tokens';
import { HttpException } from '$infrastructure/webserver/types';
import { removeElementIfExists } from '$application/utils/array';
import { User } from '$infrastructure/database';
import { Environment } from '$infrastructure/config';

const generateTokenPair = async (id: string, env: Environment) => {
  // Generate a unique refresh id, an access and refresh token pair
  // The refresh id is needed to improve security while not saving a token
  // to the database.
  const refreshId = randomUUID();
  const [accessToken, refreshToken] = await Promise.all([
    AuthToken.sign({ id }, env.JWT_PRIVATE_KEY, { subject: id, expiresIn: env.JWT_EXPIRES_IN }),
    AuthToken.sign({ id }, env.JWT_REFRESH_PRIVATE_KEY, {
      subject: id,
      expiresIn: env.JWT_REFRESH_EXPIRES_IN,
      jwtid: refreshId,
    }),
  ]);
  return { accessToken, refreshToken, refreshId };
};

export const AuthDatabaseService: AuthServiceFactory = ({ env, userService }) => ({
  signUp: async (payload) => {
    const password = await PasswordHash.hash(payload.password);
    return userService.create({ ...payload, password });
  },

  signIn: async ({ id, tokens }, refreshCookie) => {
    const { accessToken, refreshId, refreshToken } = await generateTokenPair(id, env);

    // Parse the refresh token cookie header
    const existingRefreshId = refreshCookie ? AuthToken.decode(refreshCookie)?.jti : null;

    // If the token already exists in the array, it means that the sign in protocol
    // got called while already signed in. In this case, just remove revoke the
    // old refresh token because a new one got created.
    let filteredTokens = removeElementIfExists(tokens, existingRefreshId);

    // If a refresh token exists / was provided in the sign in process, check for the
    // token in the database. If the token was not found in the database, which means
    // the token got invalidated but still provided by the client, revoke all tokens
    // of the user because a token reuse was detected.
    let reuseDetected = false;

    if (existingRefreshId && tokens.length > 0) {
      await userService.findByToken(refreshId).catch(() => {
        filteredTokens = [];
        reuseDetected = true;
      });
    }

    // Add the generated token to the token list. If a token reuse was detected, invalidate
    // all currently active tokens. If the provided refresh token was already persisted,
    // remove it from the list (invalidate it, because a new one got created).
    await userService.persistTokens(id, [...filteredTokens, refreshId]);

    // If nothing went wrong, the tokens can get returned
    return { accessToken, refreshToken, reuseDetected };
  },

  signOut: async (id) => {
    await userService.persistTokens(id, []);
    return { message: 'successfully signed out', statusCode: status.OK };
  },

  getAuthenticatedUser: async (identifier, password) => {
    const user = await userService.findByEmailOrUsername(identifier).catch(() => {
      throw new HttpException('invalid credentials', status.UNAUTHORIZED);
    });

    if (!(await PasswordHash.compare(password, user.password))) {
      throw new HttpException('invalid credentials', status.UNAUTHORIZED);
    }

    return user;
  },

  verifyRefreshToken: async (refreshToken) => {
    // Try to decode the token in order to get the token id to look
    // for in the database. If this failed, a wrong token was provided.
    const decoded = AuthToken.decode(refreshToken);

    if (!decoded) {
      throw new HttpException('invalid refresh token', status.FORBIDDEN);
    }

    const foundUser = await userService.findByToken(decoded.jti!).catch(() => null);

    // The provided refresh token was not found in database. At this point,
    // the token was a valid jwt token, so it must got used after invalidation, in other
    // words, a token reuse was detected. All tokens of the hacked user should get
    // invalidated by now.

    if (!foundUser) {
      const reusePayload = AuthToken.verify(refreshToken, env.JWT_REFRESH_PUBLIC_KEY) as { id: string };
      await userService.persistTokens(reusePayload.id, []);
      throw new HttpException('invalid refresh token', status.FORBIDDEN);
    }

    let updatedUser: User;

    try {
      AuthToken.verify(refreshToken, env.JWT_REFRESH_PUBLIC_KEY) as { id: string };
    } catch (_) {
      // If the token was found in database and was a valid jwt token, it means
      // that the token expired. In this case remove the token from database.
      throw new HttpException('invalid refresh token', status.FORBIDDEN);
    } finally {
      // At this point everything was ok. No reuse was detected and the token was
      // valid and not expired. Return the user object to create a new token pair.
      const filteredTokens = removeElementIfExists(foundUser.tokens, decoded.jti);
      updatedUser = await userService.persistTokens(foundUser.id, filteredTokens);
    }

    return updatedUser;
  },

  refreshToken: async ({ id, tokens }) => {
    const { accessToken, refreshId, refreshToken } = await generateTokenPair(id, env);
    userService.persistTokens(id, [...tokens, refreshId]);
    return { refreshToken, accessToken, reuseDetected: false };
  },
});
