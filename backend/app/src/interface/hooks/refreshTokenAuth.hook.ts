import status from 'http-status';
import { HookFactory, Hook, HttpException } from '$infrastructure/webserver/types';
import { AuthService } from '$application/use_cases/auth/auth.service';

export type RefreshTokenAuthHookFactory = (s: { authService: AuthService }) => Hook;
export const refreshTokenAuthHookFactory: RefreshTokenAuthHookFactory = ({ authService }) =>
  HookFactory(async (req) => {
    const refreshToken = req.cookies.REFRESH;

    if (!refreshToken) {
      throw new HttpException('invalid refresh token', status.UNAUTHORIZED);
    }

    req.user = await authService.verifyRefreshToken(refreshToken);
  });
