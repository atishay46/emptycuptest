import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EmptyCup Test',
  description: 'A clean and responsive mobile service listing platform built with Next.js and Tailwind CSS.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
