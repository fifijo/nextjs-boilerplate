import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RegisterClient } from './client'

export default function RegisterPage(): JSX.Element {
 return (
  <Card className='mx-auto max-w-sm border-0 shadow-none mt-4 sm:mt-12 sm:border sm:shadow-sm md:mt-20 lg:mt-24 xl:mt-28'>
   <CardHeader>
    <CardTitle className='text-xl'>Sign Up</CardTitle>
    <CardDescription>Enter your information to create an account</CardDescription>
   </CardHeader>
   <CardContent>
    <RegisterClient />
    <div className='mt-4 text-center text-sm'>
     Already have an account?{' '}
     <Link href='/login' className='underline'>
      Sign in
     </Link>
    </div>
   </CardContent>
  </Card>
 )
}