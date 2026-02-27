import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CamboCare Concierge - Coming Soon',
  description: 'CamboCare Concierge is a single point of contact for international patients seeking medical and aesthetic care in Cambodia.',
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
