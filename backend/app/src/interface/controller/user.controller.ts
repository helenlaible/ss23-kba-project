import status from 'http-status';
import { Controller, HttpException } from '$infrastructure/webserver/types';
import { mapUserToPublic } from '$domain/mappings/user.mapper';

export interface UserController {
  userInformation: Controller;
}

export type UserControllerFactory = () => UserController;
export const userControllerFactory: UserControllerFactory = () => ({
  userInformation: async ({ user }, reply) => {
    if (!user) {
      throw new HttpException('user not authenticated', status.UNAUTHORIZED);
    }

    return reply.send(mapUserToPublic(user));
  },
});
