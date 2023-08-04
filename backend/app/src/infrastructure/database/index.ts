import { PrismaClient } from '$prisma/client';

import { registerValue } from '$infrastructure/di';

export * from '$prisma/client';
export type OrmClient = PrismaClient;

export const initializeDatabase = () => {
  const client = new PrismaClient();
  registerValue('db', client);
  return client;
};
