'use server'

import { getErrorRedirect, getSuccessRedirect, parseFormData } from '@cgambrell/utils'
import { Prisma } from '@prisma/client'
import { hash } from 'bcryptjs'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import { signIn, signOut } from '@/lib/auth'
import { loginSchema, registerSchema, verifyEmailSchema } from '@/validators/auth'

export async function register(_prevState: Record<string, unknown>, formData: FormData): Promise<{ errors?: Record<string, string[]> }> {
 const { data, errors } = parseFormData(formData, registerSchema)
 if (errors) return { errors }

 try {
  await prisma.user.create({ data: { name: `${data.firstName} ${data.lastName}`, email: data.email, passwordHash: await hash(data.password, 10) } })
 } catch (error) {
  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002')
   return { errors: { email: ['User already exists with that email'] } }
  else if (error instanceof AuthError) redirect(getErrorRedirect('/register', error.cause?.err?.message))
   throw error
   }

 redirect(getSuccessRedirect('/login', 'Account created, please login'))
}

export async function login(_prevState: Record<string, unknown>, formData: FormData): Promise<{ errors?: Record<string, string[]> }> {
    const { data, errors } = parseFormData(formData, loginSchema)
    if (errors) return { errors }

    try {
        await signIn('credentials', { email: data.email, password: data.password, redirectTo: '/' })
    } catch (error) {
        if (error instanceof AuthError) redirect(getErrorRedirect('/login', error.cause?.err?.message))
        throw error
        }
        return {};
}

export async function logout(): Promise<void> {
    await signOut({ redirectTo: '/login' })
}


export async function verifyEmail(_prevState: Record<string, unknown>, formData: FormData): Promise<{ errors?: Record<string, string[]> }> {
    const { data, errors } = parseFormData(formData, verifyEmailSchema)
    if (errors) return { errors }

    try {
     await signIn('resend', { email: data.email, redirect: false })
    } catch (error) {
     if (error instanceof AuthError) redirect(getErrorRedirect('/forgot', error.cause?.err?.message))
     throw error
    }

    redirect(getSuccessRedirect('/login', 'A sign in link has been sent to your email address.'))
   }