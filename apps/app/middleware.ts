import NextAuth from 'next-auth'
import { authConfig } from '@/lib/auth'

export default NextAuth(authConfig).auth
export const config = {
 matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}