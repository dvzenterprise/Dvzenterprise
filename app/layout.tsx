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
  title: 'DVZ Enterprise. Para Líderes, Gestores e Staffs',
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
    'servidor discord DVZ Enterprise',
    'comunidade discord negócios',
    'discord networking executivo',
    'site oficial DVZ Enterprise',
    'servidor oficial do discord DVZ Enterprise',
    'discord DVZ Enterprise',
    'link discord DVZ Enterprise',
  ],
  alternates: {
    canonical: 'https://dvz-gamma.vercel.app/',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'DVZ Enterprise. Para Líderes, Gestores e Staffs',
    description:
      'Hub corporativo de alta performance focado em Negócios, Networking Executivo e Pensamento Crítico Racionalista.',
    type: 'website',
    url: 'https://dvz-gamma.vercel.app/',
    siteName: 'DVZ Enterprise', // Define o nome do site para compartilhamento
    images: [
      {
        url: 'https://dvz-gamma.vercel.app/icon.svg',
      },
    ],
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
  // Informa explicitamente ao Google o nome oficial do site
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'DVZ Enterprise',
    'alternateName': ['DVZ', 'DVZ Enterprise Discord'],
    'url': 'https://dvz-gamma.vercel.app/',
  }

  // Vincula a organização e o Discord
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'DVZ Enterprise',
    'url': 'https://dvz-gamma.vercel.app/',
    'logo': 'https://dvz-gamma.vercel.app/icon.svg',
    'sameAs': [
      'https://discord.gg/A3uDc72yKp'
    ],
  }

  return (
    <html lang="pt-BR" className={`dark ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
