import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/shared/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Önermesene - Kötü Deneyimleri Paylaşın, Toplumu Bilinçlendirin',
  description: 'Kötü hizmet deneyimlerinizi paylaşın, başkalarının deneyimlerinden faydalanın ve bilinçli tercihler yapın.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
