import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = (): PrismaClient => {
 return new PrismaClient()
}

declare const globalThis: {
 prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prisma = prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma