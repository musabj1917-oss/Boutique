import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Northstar — Make your next move matter.',
  description: 'Northstar is a digital studio building websites, stores, and restaurant experiences for ambitious brands.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
