
import { Suspense } from 'react'
import type { ReactNode, JSX } from "react"
import { GlobalToaster } from '@/components/global-toaster'
import '@repo/ui/globals.css';

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) : JSX.Element {
 return (
  <html lang='en'>
   <body>
    {children}
    <Suspense>
     <GlobalToaster />
    </Suspense>
   </body>
  </html>
 )
}