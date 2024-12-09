'use client'

import { useActionState } from 'react'
import type { JSX } from 'react'
import Link from 'next/link'
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { Button } from '@repo/ui/components/ui/button'
import { login } from '@/actions/auth'
import { ActionButton } from '@/components/action-button'
import { FormError } from '@/components/form-error'

export function LoginClient(): JSX.Element {
 const [state, action] = useActionState(login, { errors: {} })

 return (
  <form action={action} className='grid gap-4'>
   <div className='grid gap-2'>
    <Label htmlFor='email'>Email</Label>
    <Input id='email' name='email' placeholder='m@example.com' />
    <FormError value={state.errors ? state.errors.email : undefined} />
   </div>
   <div className='grid gap-2'>
    <div className='flex items-center'>
     <Label htmlFor='password'>Password</Label>
     <Link href='/forgot' className='ml-auto inline-block text-sm underline'>
      Forgot your password?
     </Link>
    </div>
    <Input id='password' name='password' type='password' />
    <FormError value={state.errors ? state.errors.password : undefined} />
   </div>
   <ActionButton>Login</ActionButton>
   <Button variant='outline'>Login with Google</Button>
  </form>
 )
}