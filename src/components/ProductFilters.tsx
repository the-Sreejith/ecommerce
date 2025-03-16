"use client"

import { useRouter } from "next/navigation"

interface ProductFiltersProps {
  categoryOptions: Array<{ value: string, label: string }>;
  currentCategory?: string;
  currentSort?: string;
}

export function ProductFilters({ categoryOptions, currentCategory, currentSort }: ProductFiltersProps) {
  const router = useRouter();
  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const url = new URL(window.location.href);
    if (e.target.value) {
      url.searchParams.set("category", e.target.value);
    } else {
      url.searchParams.delete("category");
    }
    router.push(url.toString().replace(window.location.origin, ''));
  };
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const url = new URL(window.location.href);
    if (e.target.value) {
      url.searchParams.set("sort", e.target.value);
    } else {
      url.searchParams.delete("sort");
    }
    router.push(url.toString().replace(window.location.origin, ''));
  };
  
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex-1">
        <select
          className="w-full rounded-md border border-gray-300 p-2"
          value={currentCategory || ""}
          onChange={handleCategoryChange}
        >
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex-1">
        <select
          className="w-full rounded-md border border-gray-300 p-2"
          value={currentSort || ""}
          onChange={handleSortChange}
        >
          <option value="">Latest</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}