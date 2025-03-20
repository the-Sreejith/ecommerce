"use client"

import React from 'react'
import { CartProvider } from '@/contexts/CartContext'
import { ModalCartProvider } from '@/contexts/ModalCartContext'
import { WishlistProvider } from '@/contexts/WishlistContext'
import { ModalWishlistProvider } from '@/contexts/ModalWishlistContext'
import { CompareProvider } from '@/contexts/CompareContext'
import { ModalCompareProvider } from '@/contexts/ModalCompareContext'
import { ModalSearchProvider } from '@/contexts/ModalSearchContext'
import { ModalQuickviewProvider } from '@/contexts/ModalQuickviewContext'
import { SessionProvider } from 'next-auth/react'

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <SessionProvider>
            <CartProvider>
                <ModalCartProvider>
                    <WishlistProvider>
                        <ModalWishlistProvider>
                            <CompareProvider>
                                <ModalCompareProvider>
                                    <ModalSearchProvider>
                                        <ModalQuickviewProvider>
                                            {children}
                                        </ModalQuickviewProvider>
                                    </ModalSearchProvider>
                                </ModalCompareProvider>
                            </CompareProvider>
                        </ModalWishlistProvider>
                    </WishlistProvider>
                </ModalCartProvider>
            </CartProvider>
        </SessionProvider>
    )
}

export default GlobalProvider