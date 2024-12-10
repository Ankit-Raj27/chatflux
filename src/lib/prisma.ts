import { PrismaClient } from '@prisma/client';

// Extend the global object to include `prisma`
declare global {
  var prisma: PrismaClient | undefined;
}

// Create the Prisma Client instance
export const client = global.prisma || new PrismaClient();

// Assign the client to `global.prisma` in non-production environments
if (process.env.NODE_ENV !== 'production') global.prisma = client;
