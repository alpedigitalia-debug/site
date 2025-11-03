import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/styles/globals.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlowTrigger - DISPARAMOS TU FLOW',
  description: 'Transformamos tus ideas en contenido audiovisual de vanguardia usando Inteligencia Artificial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen bg-background-pure-black text-text-primary font-body`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}