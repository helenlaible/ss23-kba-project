import fastify, { FastifyInstance, FastifyPluginCallback } from 'fastify';
import fastifyHelmet from '@fastify/helmet';
import fastifyCors from '@fastify/cors';
import fastifyCookie from '@fastify/cookie';

import { loadEnvironment } from '$infrastructure/config';
import { notFoundHandler } from '$infrastructure/webserver/handler/not_found.handler';
import { errorHandler } from '$infrastructure/webserver/handler/error.handler';
import { rateLimitPlugin } from '$infrastructure/webserver/plugins/rate_limiter';
import { envToLoggerConfig } from '$infrastructure/webserver/plugins/logger';
import { initializeDatabase } from '$infrastructure/database';
import { initializeDependencies } from '$infrastructure/di';
import { Router } from '$infrastructure/webserver/types';

const registerPlugins = async (app: FastifyInstance, plugins: () => FastifyPluginCallback[]) => {
  const defaultPlugins = [
    rateLimitPlugin(app),
    app.register(fastifyCors, {
      origin: (origin, cb) => {
        if (!origin) return cb(null, true);

        if (new URL(origin).hostname === 'localhost') {
          return cb(null, true);
        }

        return cb(new Error('Not allowed'), false);
      },
      credentials: true,
    }),
    app.register(fastifyHelmet),
    app.register(fastifyCookie),
  ];
  return Promise.all([...defaultPlugins, ...plugins().map((plugin) => app.register(plugin))]);
};

const registerRoutes = async (app: FastifyInstance, routers: () => Router[]) => {
  const defaultRoutes = [app.setNotFoundHandler(notFoundHandler), app.setErrorHandler(errorHandler)];
  return Promise.all([...defaultRoutes, ...routers().map(({ prefix, routes }) => app.register(routes, { prefix }))]);
};

export const App = (init: { plugins: () => FastifyPluginCallback[]; routes: () => Router[]; root: string }) => {
  const env = loadEnvironment(`${init.root}/.env`);

  initializeDatabase();
  initializeDependencies();

  const app = fastify({ logger: envToLoggerConfig[env.NODE_ENV] });

  app.addHook('preHandler', (req, _, done) => {
    if (req.body) req.log.info({ body: req.body }, 'parsed body');
    done();
  });

  Promise.all([registerPlugins(app, init.plugins), registerRoutes(app, init.routes)]).catch((err: Error) => {
    app.log.fatal({ msg: `error while registering routes and plugins`, err });
    process.exit(1);
  });

  const listen = async () => {
    app.listen({ port: env.PORT, host: env.HOST }, (err) => {
      if (err) {
        app.log.fatal({ msg: `application startup error`, err });
        process.exit(1);
      }
    });

    return app;
  };

  return { app, env, listen };
};
