import { z } from 'zod';

const toInt = (val: string) => parseInt(val, 10);

export const environmentSchema = z.object({
  // General app config
  NODE_ENV: z.enum(['development', 'test', 'production']),

  // Start config
  DOMAIN: z.string().min(1),
  HOST: z.string().min(1),
  PORT: z.string().transform(toInt),

  // Rate limit config
  THROTTLE_MAX_REQUESTS: z.string().transform(toInt),
  THROTTLE_TIME_WINDOW: z.string().transform(toInt),

  // Database config
  DATABASE_HOST: z.string().min(1),
  DATABASE_USER: z.string().min(1),
  DATABASE_PASSWORD: z.string().min(1),
  DATABASE_DB: z.string().min(1),
  DATABASE_PORT: z.string().transform(toInt),
  DATABASE_URL: z.string().min(1),

  // Authentication token config
  JWT_ISSUER: z.string().min(1),

  JWT_PRIVATE_KEY: z.string().min(1),
  JWT_PUBLIC_KEY: z.string().min(1),
  JWT_EXPIRES_IN: z.string().min(1),

  JWT_REFRESH_PRIVATE_KEY: z.string().min(1),
  JWT_REFRESH_PUBLIC_KEY: z.string().min(1),
  JWT_REFRESH_EXPIRES_IN: z.string().min(1),
});
