import { Hook, Router } from '$infrastructure/webserver/types';
import { UserController } from '$interface/controller/user.controller';

export const UserRouter = 'userRouter';

export type UserRouterFactory = (s: { userController: UserController; tokenAuthHook: Hook }) => Router;

export const userRouterFactory: UserRouterFactory = ({ tokenAuthHook, userController }) => ({
  prefix: '/user',
  routes: async (app) => {
    app.get('/', { preHandler: tokenAuthHook }, userController.userInformation);
  },
});
