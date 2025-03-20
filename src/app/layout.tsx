// layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import '@/styles/styles.scss'
import TopNav from '@/components/TopNav'
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import GlobalProvider from "./GlobalProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "E-commerce Store",
  description: "A modern e-commerce platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GlobalProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopNav props="style-three bg-white" />
          <div id="header" className='relative w-full'>
            <Navbar props="bg-white" />
          </div>
          {children}
          <div id="header" className='relative w-full'>

            <Footer />
          </div>
        </body>
      </html>
    </GlobalProvider>
  )
}