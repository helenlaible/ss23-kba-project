import { RouteHandlerMethod, FastifyPluginCallback, FastifyReply as res, FastifyRequest as req } from 'fastify';
import { User } from '$prisma/client';

declare module 'fastify' {
  interface FastifyRequest {
    user: User | null;
  }
}

export { FastifyRequest as Request } from 'fastify';
export { FastifyReply as Response } from 'fastify';
export { CookieSerializeOptions as CookieOptions } from '@fastify/cookie';

export type Controller = RouteHandlerMethod;
export type Router = { prefix: string; routes: FastifyPluginCallback };
export type Hook<REQ extends req = req, REP extends res = res> = ReturnType<typeof HookFactory<REQ, REP>>;
export const HookFactory = <REQ, REP>(cb: (req: REQ, reply: REP) => Promise<void>) => cb;

export class HttpException extends Error {
  public code: number;

  constructor(msg: string, code = 500) {
    super(msg);
    this.code = code;
  }
}
