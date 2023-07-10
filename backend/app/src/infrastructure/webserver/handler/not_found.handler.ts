import { FastifyInstance } from 'fastify';

type Handler = Parameters<FastifyInstance['setNotFoundHandler']>[1];

export const notFoundHandler: Handler = async (_, reply) => {
  return reply.code(404).send({ error: 'endpoint not found', status: 404 });
};
