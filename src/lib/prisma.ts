import { Prisma, PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined> = global.prisma || new PrismaClient({ log: ['query'] });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
