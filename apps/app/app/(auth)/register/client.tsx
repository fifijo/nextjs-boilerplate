'use client'

import { useActionState } from 'react'
import type { JSX } from 'react'
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { register } from '@/actions/auth'
import { ActionButton } from '@/components/action-button'
import { FormError } from '@/components/form-error'

export function RegisterClient(): JSX.Element {
 const [state, action] = useActionState(register, { errors: {} })
 const errors = state.errors ?? {}

 return (
  <form action={action} className='grid gap-4'>
   <div className='grid grid-cols-2 gap-4'>
    <div className='grid gap-2'>
     <Label htmlFor='firstName'>First name</Label>
     <Input id='firstName' name='firstName' placeholder='Max' />
     <FormError value={errors.firstName} />
    </div>
    <div className='grid gap-2'>
     <Label htmlFor='lastName'>Last name</Label>
     <Input id='lastName' name='lastName' placeholder='Robinson' />
     <FormError value={errors.lastName} />
    </div>
   </div>
   <div className='grid gap-2'>
    <Label htmlFor='email'>Email</Label>
    <Input id='email' name='email' placeholder='m@example.com' />
    <FormError value={errors.email} />
   </div>
   <div className='grid gap-2'>
    <Label htmlFor='password'>Password</Label>
    <Input id='password' name='password' type='password' />
    <FormError value={errors.password} />
   </div>
   <div className='grid gap-2'>
    <Label htmlFor='confirmPassword'>Confirm password</Label>
    <Input id='confirmPassword' name='confirmPassword' type='password' />
    <FormError value={errors.confirmPassword} />
   </div>
   <ActionButton>Create an account</ActionButton>
  </form>
 )
}