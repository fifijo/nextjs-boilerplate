//@ts-nocheck
import NextAuth from 'next-auth'
import type { NextAuthConfig } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { compare } from 'bcryptjs'
import Credentials from 'next-auth/providers/credentials'
import Resend from 'next-auth/providers/resend'
import { loginSchema } from '@/validators/auth'
import prisma from '@/lib/prisma'

export const authConfig = {
    adapter: PrismaAdapter(prisma),
    callbacks: {
    authorized: ({ auth, request: { nextUrl } }) => {
    const isAuthed = Boolean(auth?.user)
    const isAuthRoute =
        nextUrl.pathname.startsWith('/login') || nextUrl.pathname.startsWith('/register') || nextUrl.pathname.startsWith('/forgot')

    if (!isAuthRoute) {
        if (isAuthed) return true
        return false
    } else if (isAuthed) return Response.redirect(new URL('/', nextUrl))
    return true
    },
    },
    pages: { signIn: '/login' },
    providers: [
        Credentials({
                credentials: { email: {}, password: {} },
                authorize: async (credentials) => {
                const { email, password } = await loginSchema.parseAsync(credentials)

                const user = await prisma.user.findUnique({ where: { email } }) as { id: string, email: string, name: string, passwordHash: string }

                if (!user.passwordHash) throw new Error('User does not have a password')
                else if (!(await compare(password, user.passwordHash))) throw new Error('Password does not match')

                return { id: user.id, email: user.email, name: user.name }
                },
            }),
            Resend({ from: 'noreply@example.com' }),
        ],
    session: { strategy: 'jwt' }
} satisfies NextAuthConfig

export const auth = async (): Promise<{name: string}> => {
    const session = await NextAuth(authConfig).auth()
    if (!session?.user) throw new Error('Not authenticated.')

    const user = await prisma.user.findFirst({ where: { email: session.user.email ?? '' } })
    if(!user) {
        throw new Error('User not found')
    }

    return { name: user.name }
   }

export const { handlers, auth: session, signIn, signOut } = NextAuth(authConfig)