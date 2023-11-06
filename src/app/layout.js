import { ChakraProvider } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './HomePage/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SIS 2024',
  description: 'Website for SIS 2024 Conference',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ChakraProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </ChakraProvider>
    </html>
  )
}
