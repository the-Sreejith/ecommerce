// layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import '@/styles/styles.scss'
import { Header } from "@/components/Header"
import { Toaster } from "@/components/ui/toaster"
import { Providers } from "@/components/Providers"
import { ToastProvider } from "@/components/ui/toast-context" 
import  TopNav  from '@/components/TopNav'

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
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ToastProvider>
            <div className="flex min-h-screen flex-col">
              <TopNav props="style-one bg-black" slogan="New customers save 10% with the code GET10"/>
              <Header />
              <main className="flex-1">{children}</main>
              <footer className="border-t py-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} E-commerce Store. All rights reserved.
              </footer>
            </div>
            <Toaster />
          </ToastProvider>
        </Providers>
      </body>
    </html>
  )
}