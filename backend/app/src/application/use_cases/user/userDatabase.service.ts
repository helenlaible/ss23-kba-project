import status from 'http-status';
import { UserServiceFactory } from '$application/use_cases/user/user.service';
import { HttpException } from '$infrastructure/webserver/types';

export const UserDatabaseService: UserServiceFactory = ({ db }) => ({
  create: async (payload) => {
    return db.user.create({ data: { ...payload } }).catch(() => {
      throw new HttpException('user with this email or username already exists', status.CONFLICT);
    });
  },

  findById: async (id) => {
    return db.user.findUniqueOrThrow({ where: { id } }).catch(() => {
      throw new HttpException('user with this id does not exist', status.NOT_FOUND);
    });
  },

  findByEmailOrUsername: async (identifier) => {
    return db.user.findFirstOrThrow({ where: { OR: [{ email: identifier }, { username: identifier }] } }).catch(() => {
      throw new HttpException('user with this identifier does not exist', status.NOT_FOUND);
    });
  },

  findByToken: async (refreshToken) => {
    return db.user.findFirstOrThrow({ where: { tokens: { has: refreshToken } } }).catch(() => {
      throw new HttpException('invalid token provided', status.BAD_REQUEST);
    });
  },

  persistTokens: async (id, tokens) => {
    const alreadyAssigned = await db.user.findFirst({
      where: { AND: [{ tokens: { hasSome: tokens } }, { id: { not: id } }] },
    });

    if (alreadyAssigned) {
      throw new HttpException('token already assigned', status.BAD_REQUEST);
    }

    return db.user.update({ where: { id }, data: { tokens } });
  },

  addSandboxQueryToHistory: async (id, query) => {
    return db.user.update({ where: { id }, data: { sandboxHistory: { push: query } } });
  },

  flushSandboxHistory: async (id) => {
    return db.user.update({ where: { id }, data: { sandboxHistory: [] } });
  },

  toggleSandboxCreated: async (id) => {
    return db.user.update({ where: { id }, data: { sandboxCreated: true } });
  },
});
