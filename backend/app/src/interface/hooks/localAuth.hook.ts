import { AuthService } from '$application/use_cases/auth/auth.service';
import { SignInInterface } from '$domain/interface/auth.interface';
import { HookFactory, Hook, Request } from '$infrastructure/webserver/types';

export type LocalAuthHookFactory = (s: { authService: AuthService }) => Hook<Request<{ Body: SignInInterface }>>;
export const localAuthHookFactory: LocalAuthHookFactory = ({ authService }) =>
  HookFactory(async (req) => {
    req.user = await authService.getAuthenticatedUser(req.body.identifier, req.body.password);
  });
