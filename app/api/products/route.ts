// File: app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getProducts, addProduct } from "@/lib/db";

export async function GET() {
  try {
    const products = getProducts();
    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, price, description, imageUrl } = body;
    
    // Validate inputs
    if (!name || !price || !description || !imageUrl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    const newProduct = addProduct({
      name,
      price: Number(price),
      description,
      imageUrl,
    });
    
    return NextResponse.json({ product: newProduct }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add product" },
      { status: 500 }
    );
  }
}