import { Product } from "@/types";
import fs from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "db.json");

// Initialize database if it doesn't exist
const initializeDB = () => {
  if (!fs.existsSync(DB_PATH)) {
    const initialData = {
      products: Array.from({ length: 8 }, (_, i) => ({
        id: `product-${i + 1}`,
        name: `Product ${i + 1}`,
        price: 100 + i * 10,
        description: "This is a very long description of the product mentioned above",
        imageUrl: `https://placehold.co/600x400?text=Product+${i + 1}`,
      })),
    };
    fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2));
  }
};

// Get all products
export const getProducts = (): Product[] => {
    initializeDB();
    const data = JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
    return data.products;
  };
  
  // Add a new product
  export const addProduct = (product: Omit<Product, "id">): Product => {
    initializeDB();
    const data = JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
    const newProduct = {
      ...product,
      id: `product-${Date.now()}`,
    };
    data.products.push(newProduct);
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    return newProduct;
  };
  
  