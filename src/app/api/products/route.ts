// File: app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const sort = searchParams.get("sort");
    
    // Build the query
    let orderBy = {};
    if (sort === "price_asc") {
      orderBy = { price: "asc" };
    } else if (sort === "price_desc") {
      orderBy = { price: "desc" };
    } else {
      // Default sorting by creation date
      orderBy = { createdAt: "desc" };
    }
    
    // Filter by category if provided
    const where = category ? { category } : {};
    
    const products = await prisma.product.findMany({
      where,
      orderBy,
    });
    
    return NextResponse.json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  // Check if user is admin
  const unauthorized = await requireAdmin(request);
  if (unauthorized) return unauthorized;
  
  try {
    const body = await request.json();
    const { name, description, price, imageUrl, category, stock } = body;
    
    // Validate inputs
    if (!name || !price || !description || !imageUrl || !category) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price: Number(price),
        imageUrl,
        category,
        stock: stock ? Number(stock) : 0,
      },
    });
    
    return NextResponse.json({ product: newProduct }, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to add product" },
      { status: 500 }
    );
  }
}