"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { User, ShoppingCart, Menu } from "lucide-react"
import Image from "next/image"
import { Product } from "@/types"
import AddProductForm from "@/components/add-product-form"
import { Toaster } from "sonner"

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false)
  const [addToCartOpen, setAddToCartOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cart, setCart] = useState<Product[]>([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const categories = [
    "Category1",
    "Category2",
    "Category3",
    "Category4",
    "Category5",
    "Category6",
  ]

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products")
        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }
        const data = await response.json()
        setProducts(data.products)
      } catch (error) {
        setError("Error fetching products. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleAddToCart = (product: Product) => {
    setSelectedProduct(product)
    setAddToCartOpen(true)
  }

  const confirmAddToCart = () => {
    if (selectedProduct) {
      setCart([...cart, selectedProduct])
      setAddToCartOpen(false)
    }
  }

  const handleProductAdded = (newProduct: Product) => {
    setProducts((prev) => [...prev, newProduct])
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header/Navbar */}
      <header className="border-b">
        <div className="container mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu />
            </Button>
            <h1 className="text-2xl font-bold">Care Mall</h1>
          </div>
          
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Input
                placeholder="Search Products"
                className="w-full"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setLoginOpen(true)}>
              <User className="h-5 w-5" />
            </Button>
            <Button variant="outline" onClick={() => setCartOpen(true)}>
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart
              {cart.length > 0 && (
                <span className="ml-1 bg-primary text-primary-foreground rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </Button>
          </div>
        </div>
        
        {/* Categories Menu */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block border-t`}>
          <div className="container mx-auto p-2 flex flex-col md:flex-row md:items-center md:justify-start gap-2 md:gap-8">
            {categories.map((category, index) => (
              <Button key={index} variant="ghost" className="justify-start">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <div className="container mx-auto py-8 px-4 flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Products</h2>
          <AddProductForm onProductAdded={handleProductAdded} />
        </div>

        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <p>Loading products...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-6">
            {error}
          </div>
        )}

        {!isLoading && !error && products.length === 0 && (
          <div className="text-center p-8 border rounded-md">
            <p className="text-gray-500">No products available. Add some products to get started.</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <div className="aspect-square relative border-b">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    <div className="w-full h-full flex items-center justify-center border">
                      <span className="text-gray-300">No Image</span>
                    </div>
                  </div>
                )}
              </div>
              <CardContent className="flex-1 p-4">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm font-bold mt-1">₹ {product.price}</p>
                <p className="text-xs text-gray-500 mt-2">{product.description}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  className="w-full"
                  size="sm"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t mt-auto">
        <div className="container mx-auto p-12 text-center">
          <h2 className="text-2xl font-bold">Footer</h2>
        </div>
      </footer>

      {/* Add to Cart Dialog */}
      <Dialog open={addToCartOpen} onOpenChange={setAddToCartOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add to Cart</DialogTitle>
            <DialogDescription>
              You are adding {selectedProduct?.name} to your cart.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-between items-center mt-4">
            <p>Price: ₹{selectedProduct?.price}</p>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setAddToCartOpen(false)}>
                Cancel
              </Button>
              <Button onClick={confirmAddToCart}>
                Confirm
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Cart Dialog */}
      <Dialog open={cartOpen} onOpenChange={setCartOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Shopping Cart</DialogTitle>
            <DialogDescription>
              {cart.length === 0 
                ? "Your cart is empty" 
                : `You have ${cart.length} items in your cart`}
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-96 overflow-y-auto">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 relative flex-shrink-0">
                    {item.imageUrl ? (
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
                        <span className="text-xs text-gray-400">No image</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">₹{item.price}</p>
                  </div>
                </div>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => setCart(cart.filter((_, i) => i !== index))}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <div className="mt-4">
              <div className="flex justify-between font-bold mb-4">
                <span>Total:</span>
                <span>₹{cart.reduce((sum, item) => sum + item.price, 0)}</span>
              </div>
              <Button className="w-full">Checkout</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Login Dialog */}
      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>
              Enter your credentials to access your account
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="email">Email</label>
              <Input id="email" type="email" placeholder="example@email.com" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="password">Password</label>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full mt-2">Login</Button>
          </div>
          <div className="text-center text-sm">
            <a href="#" className="text-primary hover:underline">Forgot password?</a>
            <p className="mt-2">
              Don't have an account? <a href="#" className="text-primary hover:underline">Register</a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Sonner Toast Container */}
      <Toaster richColors position="top-right" />
    </main>
  )
}
