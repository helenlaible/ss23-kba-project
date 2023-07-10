import fastifyRateLimit from '@fastify/rate-limit';
import { FastifyInstance } from 'fastify';

import { Environment, EnvironmentSymbol } from '$infrastructure/config';
import { resolveDependency } from '$infrastructure/di';

export const rateLimitPlugin = (app: FastifyInstance) => {
  const config = resolveDependency<Environment>(EnvironmentSymbol);

  const rateLimitConfig = {
    max: config.THROTTLE_MAX_REQUESTS,
    timeWindow: config.THROTTLE_TIME_WINDOW,
  };

  return app.register(fastifyRateLimit, rateLimitConfig);
};
