'use client'

// CartContext.tsx
import React, { createContext, useContext, useState, useReducer, useEffect } from 'react';
import { ProductType } from '@/types/ProductType';

interface CartItem extends ProductType {
    quantity: number
    selectedSize: string
    selectedColor: string
}

interface CartState {
    cartArray: CartItem[]
}

type CartAction =
    | { type: 'ADD_TO_CART'; payload: ProductType }
    | { type: 'REMOVE_FROM_CART'; payload: string }
    | {
        type: 'UPDATE_CART'; payload: {
            itemId: string; quantity: number, selectedSize: string, selectedColor: string
        }
    }
    | { type: 'LOAD_CART'; payload: CartItem[] }

interface CartContextProps {
    cartState: CartState;
    addToCart: (item: ProductType) => void;
    removeFromCart: (itemId: string) => void;
    updateCart: (itemId: string, quantity: number, selectedSize: string, selectedColor: string) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const newItem: CartItem = { ...action.payload, quantity: 1, selectedSize: '', selectedColor: '' };
            return {
                ...state,
                cartArray: [...state.cartArray, newItem],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartArray: state.cartArray.filter((item) => item.id !== action.payload),
            };
        case 'UPDATE_CART':
            return {
                ...state,
                cartArray: state.cartArray.map((item) =>
                    item.id === action.payload.itemId
                        ? {
                            ...item,
                            quantity: action.payload.quantity,
                            selectedSize: action.payload.selectedSize,
                            selectedColor: action.payload.selectedColor
                        }
                        : item
                ),
            };
        case 'LOAD_CART':
            return {
                ...state,
                cartArray: action.payload,
            };
        default:
            return state;
    }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, { cartArray: [] });

    const addToCart = (item: ProductType) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const removeFromCart = (itemId: string) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    };

    const updateCart = (itemId: string, quantity: number, selectedSize: string, selectedColor: string) => {
        dispatch({ type: 'UPDATE_CART', payload: { itemId, quantity, selectedSize, selectedColor } });
    };

    return (
        <CartContext.Provider value={{ cartState, addToCart, removeFromCart, updateCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};


// import { createContext, useContext, useState, ReactNode, useEffect } from "react";
// import { Product, CartItem } from "@/types";
// import { toast } from "sonner";

// interface CartContextType {
//   items: CartItem[];
//   addItem: (product: Product, quantity: number) => void;
//   removeItem: (productId: string) => void;
//   updateQuantity: (productId: string, quantity: number) => void;
//   clearCart: () => void;
//   getTotal: () => number;
//   itemCount: number;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [itemCount, setItemCount] = useState(0);

//   // Initialize cart from localStorage on client side
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       try {
//         const parsedCart = JSON.parse(savedCart);
//         setItems(parsedCart);
//         updateItemCount(parsedCart);
//       } catch (error) {
//         console.error("Failed to parse cart from localStorage:", error);
//       }
//     }
//   }, []);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     if (items.length > 0) {
//       localStorage.setItem("cart", JSON.stringify(items));
//     } else {
//       localStorage.removeItem("cart");
//     }
//     updateItemCount(items);
//   }, [items]);

//   const updateItemCount = (cartItems: CartItem[]) => {
//     const count = cartItems.reduce((total, item) => total + item.quantity, 0);
//     setItemCount(count);
//   };

//   const addItem = (product: Product, quantity: number) => {
//     setItems(prevItems => {
//       const existingItem = prevItems.find(item => item.product.id === product.id);
      
//       if (existingItem) {
//         toast.success(`Updated "${product.name}" quantity in cart`);
//         return prevItems.map(item => 
//           item.product.id === product.id 
//             ? { ...item, quantity: item.quantity + quantity } 
//             : item
//         );
//       } else {
//         toast.success(`Added "${product.name}" to cart`);
//         return [...prevItems, { product, quantity }];
//       }
//     });
//   };

//   const removeItem = (productId: string) => {
//     setItems(prevItems => {
//       const itemToRemove = prevItems.find(item => item.product.id === productId);
//       if (itemToRemove) {
//         toast.info(`Removed "${itemToRemove.product.name}" from cart`);
//       }
//       return prevItems.filter(item => item.product.id !== productId);
//     });
//   };

//   const updateQuantity = (productId: string, quantity: number) => {
//     if (quantity <= 0) {
//       removeItem(productId);
//       return;
//     }

//     setItems(prevItems =>
//       prevItems.map(item =>
//         item.product.id === productId
//           ? { ...item, quantity }
//           : item
//       )
//     );
//   };

//   const clearCart = () => {
//     setItems([]);
//     localStorage.removeItem("cart");
//     toast.info("Cart cleared");
//   };

//   const getTotal = () => {
//     return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         items,
//         addItem,
//         removeItem,
//         updateQuantity,
//         clearCart,
//         getTotal,
//         itemCount
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// }