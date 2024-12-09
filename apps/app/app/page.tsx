import type { ReactNode } from 'react'
import { LogOutIcon } from 'lucide-react'
import { Card, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { logout } from '@/actions/auth'
import { ActionButton } from '@/components/action-button'
import { auth } from '@/lib/auth'

export default async function RootPage(): Promise<ReactNode> {
 const user = await auth()

 return (
  <Card className='mx-auto max-w-sm mt-4 sm:mt-12 md:mt-20 lg:mt-24 xl:mt-28 w-full border-0 shadow-none sm:border sm:shadow-sm'>
   <CardHeader>
    <CardTitle>{user.name ? `Hello, ${user.name}` : 'Welcome!'}</CardTitle>
   </CardHeader>
   <CardFooter>
    <form action={logout} className='w-full'>
     <ActionButton className='w-full' variant='destructive'>
      <LogOutIcon className='size-4 mr-2' />
      <span>Sign out</span>
     </ActionButton>
    </form>
   </CardFooter>
  </Card>
 )
}