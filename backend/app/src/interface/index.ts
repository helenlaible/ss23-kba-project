import { funcDependency, registerDependencies } from '$infrastructure/di';
import { authControllerFactory } from '$interface/controller/auth.controller';
import { userControllerFactory } from '$interface/controller/user.controller';
import { localAuthHookFactory } from '$interface/hooks/localAuth.hook';
import { refreshTokenAuthHookFactory } from '$interface/hooks/refreshTokenAuth.hook';
import { tokenAuthHookFactory } from '$interface/hooks/tokenAuth.hook';
import { authRouterFactory } from '$interface/routes/auth.route';
import { userRouterFactory } from '$interface/routes/user.route';

export const initializeInterfaceLayer = () =>
  registerDependencies({
    authController: funcDependency(authControllerFactory),
    userController: funcDependency(userControllerFactory),

    authRouter: funcDependency(authRouterFactory),
    userRouter: funcDependency(userRouterFactory),

    localAuthHook: funcDependency(localAuthHookFactory),
    tokenAuthHook: funcDependency(tokenAuthHookFactory),
    refreshTokenAuthHook: funcDependency(refreshTokenAuthHookFactory),
  });
