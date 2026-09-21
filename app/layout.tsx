import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DVZ Enterprise — Organizar · Executar · Evoluir',
  description:
    'Hub corporativo de alta performance focado em Negócios, Networking Executivo e Pensamento Crítico Racionalista. Estruturado sob o método DVZ-STED e a filosofia Kaizen.',
  generator: 'v0.app',
  keywords: [
    'DVZ Enterprise',
    'DVZ-STED',
    'networking executivo',
    'gestão estratégica',
    'Kaizen',
    'comunidade corporativa',
  ],
  openGraph: {
    title: 'DVZ Enterprise — Organizar · Executar · Evoluir',
    description:
      'Hub corporativo de alta performance focado em Negócios, Networking Executivo e Pensamento Crítico Racionalista.',
    type: 'website',
  },
  verification: {
    google: 'LJsWXeSHu9KMvrmOybUQFGDW3vPaciTTW20RblsIVKQ',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#041d30',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`dark ${inter.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
