import * as dotenv from 'dotenv';
import { z } from 'zod';
import { environmentSchema } from '$infrastructure/config/schema';
import { registerValue } from '$infrastructure/di';

export type Environment = z.infer<typeof environmentSchema>;
export const EnvironmentSymbol = 'env';

export const loadEnvironment = (path: string): Environment => {
  dotenv.config({ path });
  const parsedEnvironment = environmentSchema.parse(process.env);
  registerValue(EnvironmentSymbol, parsedEnvironment);
  return parsedEnvironment;
};
