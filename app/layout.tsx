import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import Footer from '@/components/Footer'
import './globals.css'
import NavBar from '@/components/NavBar'

const fonts = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-commerce store',
  description: 'Buy our products at the lowest price',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fonts.className}`}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
