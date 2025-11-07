import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fashionista',
  description: 'Negin Boutique - Fashion Store',
  icons: {
    icon: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690d267db138e84a9f5be3b0/5dee4f139_logo.png',
  },
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
