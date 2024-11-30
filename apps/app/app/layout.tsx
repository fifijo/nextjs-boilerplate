
import { Suspense } from 'react'
import { GlobalToaster } from '@/components/global-toaster'
import '@/app/globals.css';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) : JSX.Element {
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