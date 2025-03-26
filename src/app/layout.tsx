// layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import '@/styles/globals.css'
import '@/styles/modal.css'
import '@/styles/header.css'
// import '@/styles/footer.css'
import GlobalProvider from "@/app/GlobalProvider"
import ModalCart from '@/components/Modal/ModalCart'
import ModalWishlist from '@/components/Modal/ModalWishlist'
import ModalSearch from '@/components/Modal/ModalSearch'
import ModalQuickview from '@/components/Modal/ModalQuickview'
import ModalCompare from '@/components/Modal/ModalCompare'
import CountdownTimeType from '@/types/CountdownType'
import { countdownTime } from '@/store/countdownTime'

const serverTimeLeft: CountdownTimeType = countdownTime();

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
          {children}
          <ModalCart serverTimeLeft={serverTimeLeft} />
          <ModalWishlist />
          <ModalSearch />
          <ModalQuickview />
          <ModalCompare />
        </body>
      </html>
    </GlobalProvider>
  )
}