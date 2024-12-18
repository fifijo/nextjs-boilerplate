'use client'

import { useActionState } from 'react'
import type { JSX } from 'react'
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { verifyEmail } from '@/actions/auth'
import { ActionButton } from '@/components/action-button'
import { FormError } from '@/components/form-error'



export function ForgotClient(): JSX.Element {
 const [state, action] = useActionState(verifyEmail, { errors: {} })

 return (
  <form action={action} className='grid gap-4'>
   <div className='grid gap-2'>
    <Label htmlFor='email'>Email</Label>
    <Input id='email' name='email' placeholder='m@example.com' />
    <FormError value={state.errors ? state.errors.email : undefined} />
   </div>
   <ActionButton>Send verification</ActionButton>
  </form>
 )
}