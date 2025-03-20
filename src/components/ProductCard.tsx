"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <Link
            href={`/products/${product.id}`}
            className="text-lg font-semibold hover:underline"
          >
            {product.name}
          </Link>
          <span className="text-lg font-bold">{formatCurrency(product.price)}</span>
        </div>

        <div className="text-sm text-gray-500">{product.category}</div>
        
        <p className="mt-2 line-clamp-2 text-sm text-gray-700">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="border-t p-4">
        <Button 
          onClick={() => addItem(product, 1)} 
          className="w-full"
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
} 