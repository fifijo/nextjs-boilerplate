'use client'

import type { JSX } from 'react'
import { Loader2Icon } from 'lucide-react'
import { useFormStatus } from 'react-dom'
import { cn } from '@repo/ui/lib/utils'
import { Button } from '@repo/ui/components/ui/button'
import type { ButtonProps } from '@repo/ui/components/ui/button'


export function ActionButton({ children, className, disabled, ...props }: ButtonProps) : JSX.Element {
 const { pending } = useFormStatus()

 return (
  <Button className={cn('relative', className)} disabled={disabled ?? pending} type='submit' {...props}>
   <span className={cn('flex items-center', { invisible: pending })}>{children}</span>

   {pending ? (
    <div className='absolute m-auto'>
     <Loader2Icon className='size-5 animate-spin' />
    </div>
   ) : null}
  </Button>
 )
}