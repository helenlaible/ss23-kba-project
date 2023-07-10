import status from 'http-status';
import { HookFactory, Hook, HttpException } from '$infrastructure/webserver/types';
import { AuthToken } from '$application/security/tokens';
import { Environment } from '$infrastructure/config';
import { UserService } from '$application/use_cases/user/user.service';

export type TokenAuthHookFactory = (s: { userService: UserService; env: Environment }) => Hook;
export const tokenAuthHookFactory: TokenAuthHookFactory = ({ userService, env }) =>
  HookFactory(async (req) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new HttpException('no authentication header provided', status.UNAUTHORIZED);
    }

    const accessToken = authHeader.split(' ')[1];

    try {
      const { id } = AuthToken.verify(accessToken, env.JWT_PUBLIC_KEY) as { id: string };
      req.user = await userService.findById(id);
    } catch (_) {
      throw new HttpException('no valid auth token', status.UNAUTHORIZED);
    }
  });
