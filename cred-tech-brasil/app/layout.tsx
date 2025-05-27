import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import { Footer } from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
})

export const metadata = {
  title: 'Cred Tech Brasil',
  description: 'Descrição da minha página',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
