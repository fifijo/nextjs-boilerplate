'use client'

import toastLib, { Toaster } from 'react-hot-toast'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import type { JSX } from 'react'


export function GlobalToaster() : JSX.Element {
 const pathname = usePathname()
 const router = useRouter()
 const searchParams = useSearchParams()

 useEffect(() => {
  const message = searchParams.get('message')
  const error = searchParams.get('error')
  const success = searchParams.get('success')

  if (!message && !error && !success) return
  let toastType;
  let toastMessage;

  if (message) {
    toastType = toastLib;
    toastMessage = message;
  } else if (success) {
    toastType = toastLib.success;
    toastMessage = success;
  } else {
    toastType = toastLib.error;
    toastMessage = error;
  }

  toastType(toastMessage);

  const newSearchParams = new URLSearchParams(searchParams.toString())
  const paramsToRemove = ['message', 'error', 'success']
  paramsToRemove.forEach((param) => { newSearchParams.delete(param) })
  const redirectPath = `${pathname}?${newSearchParams.toString()}`
  router.replace(redirectPath, { scroll: false })
 }, [searchParams, pathname, router])

 return <Toaster />
}