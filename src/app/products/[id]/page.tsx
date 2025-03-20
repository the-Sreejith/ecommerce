"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { formatCurrency } from "@/lib/utils";
import { Product } from "@/types";
import { Minus, Plus, ArrowLeft } from "lucide-react";

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function  ProductDetailPage({ params }: ProductDetailPageProps) {
  const {id} = await params
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { addItem } = useCart();
  

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data.product);
      } catch (error) {
        setError("Failed to load product. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      router.push("/cart");
    }
  };

  const incrementQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <p>Loading product...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
          {error || "Product not found"}
        </div>
        <Button
          variant="ghost"
          className="mt-4 flex items-center gap-2"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-6 flex items-center gap-2"
        onClick={() => router.back()}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Products
      </Button>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg border">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-2xl font-bold text-primary">
            {formatCurrency(product.price)}
          </p>
          
          <div className="mt-2 text-sm text-gray-500">
            Category: {product.category}
          </div>
          
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="mt-2 text-gray-700">{product.description}</p>
          </div>

          <div className="mt-6">
            <div className="mb-4">
              <div className="flex items-center">
                <span className="mr-2">Quantity:</span>
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-10 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={incrementQuantity}
                    disabled={product.stock <= quantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                {product.stock} items available
              </p>
            </div>

            <Button
              className="w-full"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 