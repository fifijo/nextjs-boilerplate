import type { JSX } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@repo/ui/components/ui/card'
import { LoginClient } from './client'

export default function LoginPage() : JSX.Element {
 return (
  <Card className='mx-auto max-w-sm border-0 shadow-none mt-4 sm:mt-12 sm:border sm:shadow-sm md:mt-20 lg:mt-24 xl:mt-28'>
   <CardHeader>
    <CardTitle className='text-2xl'>Login</CardTitle>
    <CardDescription>Enter your email below to login to your account</CardDescription>
   </CardHeader>
   <CardContent>
    <LoginClient />
    <div className='mt-4 text-center text-sm'>
     Don&apos;t have an account?{' '}
     <Link href='/register' className='underline'>
      Sign up
     </Link>
    </div>
   </CardContent>
  </Card>
 )
}