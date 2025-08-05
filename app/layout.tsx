import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Project Marvlock',
  description: 'This is an Open-Source Collective',
  icons: {
    icon: '/marvlock-logo.png',
    shortcut: '/marvlock-logo.png',
    apple: '/marvlock-logo.png',
  },
  openGraph: {
    title: 'Project Marvlock',
    description: 'This is an Open-Source Collective',
    images: [
      {
        url: '/marvlock-logo.png',
        width: 1200,
        height: 630,
        alt: 'Project Marvlock Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Marvlock',
    description: 'This is an Open-Source Collective',
    images: ['/marvlock-logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: 'Orbitron', monospace;
  --font-sans: 'Orbitron', monospace;
  --font-mono: 'Orbitron', monospace;
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
