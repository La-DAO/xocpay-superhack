"use client";

// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Toaster } from '@/components/ui/sonner'

import { Wagmi } from '@/providers/Wagmi'
import { Thirdweb } from '@/providers/Thirdweb'
import { OnchainKitProvider} from '@coinbase/onchainkit';
import { baseSepolia } from 'wagmi/chains';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

// export const metadata: Metadata = {
//   title: 'XocPay',
//   description: 'Recibe, retira y ahorra en pesos o dólares con XocPay',
// }

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
        <Wagmi>
          <OnchainKitProvider
            chain={baseSepolia}
            apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
          >
            <Thirdweb>
              {children}
            </Thirdweb>            
          </OnchainKitProvider>
        </Wagmi>
        <Toaster richColors />
      </body>
    </html>
  )
}
