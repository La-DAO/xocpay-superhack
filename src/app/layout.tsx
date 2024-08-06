import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Toaster } from '@/components/ui/sonner'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'XocPay',
  description: 'Recibe, retira y ahorra en pesos o dólares con XocPay',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  )
}
