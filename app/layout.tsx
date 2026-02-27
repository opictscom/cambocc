import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CamboCC - Coming Soon',
  description: 'The next generation of Cambodia Creative Community. Coming soon!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
