import { Product } from "@/types"
import { ProductCard } from "@/components/ProductCard"
import { prisma } from "@/lib/prisma"
import { getCategoryOptions } from "@/lib/utils"
import { ProductFilters } from "@/components/ProductFilters"

interface HomePageProps {
  searchParams: Promise<{
    category?: string;
    sort?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { category, sort } = await searchParams;
  
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
  
  // Fetch products
  const products = await prisma.product.findMany({
    where,
    orderBy,
  });

  const categoryOptions = getCategoryOptions();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold">Products</h1>
        
        <ProductFilters 
          categoryOptions={categoryOptions} 
          currentCategory={category} 
          currentSort={sort} 
        />
      </div>
      
      {products.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-500">No products found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}