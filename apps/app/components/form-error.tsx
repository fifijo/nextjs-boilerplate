'use client'

import { useEffect } from 'react'
import type { JSX } from "react"
import { toast } from 'react-hot-toast'

export function FormError({ hidden = false, value }: { hidden?: boolean; value: string[] | undefined }) : JSX.Element {
  useEffect(() => {
   if (!hidden) return
   if (value?.length && value.length > 0) toast.error(`FATAL: ${value[0]}`)
  }, [hidden, value])

 if (hidden || !value?.length) {
    // @ts-expect-error Bla bla bla
    return null
 }
 return <div className='text-sm text-destructive'>{value[0]}</div>
}