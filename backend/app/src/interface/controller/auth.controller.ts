import httpStatus from 'http-status';
import { AuthService } from '$application/use_cases/auth/auth.service';
import { SignUpInterface } from '$domain/interface/auth.interface';
import { Controller, CookieOptions, HttpException } from '$infrastructure/webserver/types';
import { mapUserToPublic } from '$domain/mappings/user.mapper';

const authCookieOptions: CookieOptions = {
  httpOnly: true,
  sameSite: 'none',
  secure: 'auto',
  maxAge: 60 * 60 * 24 * 30,
  path: '/',
};

export interface AuthController {
  signUp: Controller;
  signIn: Controller;
  signOut: Controller;
  refreshToken: Controller;
}

export type AuthControllerFactory = (s: { authService: AuthService }) => AuthController;
export const authControllerFactory: AuthControllerFactory = ({ authService }) => ({
  signUp: async (request, reply) => {
    const created = await authService.signUp(request.body as SignUpInterface);
    return reply.send(mapUserToPublic(created));
  },

  signIn: async ({ user, cookies }, reply) => {
    if (!user) {
      throw new HttpException('user not authenticated', httpStatus.UNAUTHORIZED);
    }

    const { accessToken, refreshToken, reuseDetected } = await authService.signIn(user, cookies.REFRESH);

    if (reuseDetected) reply.clearCookie('REFRESH', authCookieOptions);
    reply.setCookie('REFRESH', refreshToken, authCookieOptions);

    return { accessToken, refreshToken, user: mapUserToPublic(user) };
  },

  signOut: async ({ user }, reply) => {
    reply.clearCookie('REFRESH', authCookieOptions);

    if (!user) {
      throw new HttpException('user not authenticated', httpStatus.UNAUTHORIZED);
    }

    return authService.signOut(user.id);
  },

  refreshToken: async ({ user }, reply) => {
    if (!user) {
      throw new HttpException('could not refresh token', httpStatus.UNAUTHORIZED);
    }

    const { accessToken, refreshToken } = await authService.refreshToken(user);
    reply.setCookie('REFRESH', refreshToken, authCookieOptions);
    return { accessToken, refreshToken, user: mapUserToPublic(user) };
  },
});
