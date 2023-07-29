import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

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
      <body className={fonts.className}>{children}</body>
    </html>
  )
}
