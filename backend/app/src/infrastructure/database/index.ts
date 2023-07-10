import { PrismaClient } from '$prisma/client';

import { registerValue } from '$infrastructure/di';

export * from '$prisma/client';
export type OrmClient = PrismaClient;

export type SandboxClient = {
  queryRoot: (query: string, values?: never[]) => Promise<unknown>;
  query: (opt: {
    user: string;
    password: string;
    database: string;
    query: string;
    parameter?: unknown[];
  }) => Promise<unknown>;
};

export const initializeDatabase = () => {
  const client = new PrismaClient();
  registerValue('db', client);
  return client;
};

