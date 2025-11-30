import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Intus - Tejidos Naturales de Lana de Alta Calidad',
  description: 'Descubre la belleza de la lana natural transformada con técnicas artesanales únicas',
  keywords: ['tejidos', 'lana natural', 'artesanal', 'sostenible', 'fibras naturales'],
  authors: [{ name: 'Intus' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}