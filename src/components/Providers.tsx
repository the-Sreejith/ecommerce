"use client"

import { ReactNode } from "react"
import { CartProvider } from "@/lib/contexts/CartContext"
import { SessionProvider } from "next-auth/react"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </SessionProvider>
  )
}