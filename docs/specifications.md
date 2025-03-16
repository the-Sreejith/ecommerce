### **E-commerce Application Specification**

#### **Overview**
The application is a simple e-commerce platform where users can browse products, add them to a cart, and place orders. Admins can manage products (create, update, delete). The app will feature a clean, responsive UI, a secure backend, and a database to store product and order information.

#### **Tech Stack**
- **Framework**: Next.js (v14 or latest stable version as of March 15, 2025)
- **Language**: TypeScript (for type safety and better developer experience)
- **Styling**: Tailwind CSS (utility-first CSS framework)
- **ORM**: Prisma (for database access and schema management)
- **Database**: PostgreSQL (open-source relational database)
- **Authentication**: NextAuth.js (for user authentication, optional admin/user roles)
- **Deployment**: Vercel (recommended for Next.js hosting)

#### **Features**
1. **User Features**
   - View a list of products with images, names, prices, and descriptions.
   - Filter and sort products (e.g., by price, category).
   - Add products to a shopping cart.
   - View and edit the cart (update quantities, remove items).
   - Checkout with a simple form (name, email, address).
   - View order confirmation.

2. **Admin Features**
   - Login to an admin dashboard.
   - Add new products (name, description, price, image URL, category).
   - Edit or delete existing products.
   - View a list of orders.

3. **General Features**
   - Responsive design for mobile and desktop.
   - Basic search functionality for products.
   - Error handling (e.g., product not found, server errors).

---

### **Architecture**

#### **Folder Structure**
```
ecommerce-app/
├── /app                  # Next.js App Router
│   ├── /api             # API routes
│   │   ├── /products    # Product-related endpoints
│   │   ├── /orders      # Order-related endpoints
│   │   └── /auth/[...nextauth] # NextAuth configuration
│   ├── /cart            # Cart page
│   ├── /checkout        # Checkout page
│   ├── /products        # Product listing and details pages
│   ├── /admin           # Admin dashboard and management pages
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles (Tailwind setup)
├── /components          # Reusable UI components
│   ├── /ui              # Generic UI components (Button, Card, etc.)
│   ├── ProductCard.tsx  # Product display component
│   ├── CartItem.tsx     # Cart item component
│   └── Navbar.tsx       # Navigation bar
├── /lib                 # Utility functions and Prisma client
│   ├── prisma.ts        # Prisma client setup
│   └── utils.ts         # Helper functions
├── /public              # Static assets (images, etc.)
├── /prisma              # Prisma schema and migrations
│   ├── schema.prisma    # Database schema
│   └── /migrations      # Auto-generated migrations
├── /types               # TypeScript type definitions
│   └── index.ts         # Custom types (Product, Order, etc.)
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── next.config.js       # Next.js configuration
├── .env                 # Environment variables (DB URL, etc.)
└── package.json         # Dependencies and scripts
```

#### **Database Schema (Prisma `schema.prisma`)**
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String?
  role      String   @default("USER") // USER or ADMIN
  orders    Order[]
  createdAt DateTime @default(now())
}

model Product {
  id          String   @id @default(uuid())
  name        String
  description String
  price       Float
  imageUrl    String
  category    String
  stock       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Order {
  id         String   @id @default(uuid())
  userId     String
  user       User     @relation(fields: [userId], references: [id])
  total      Float
  status     String   @default("PENDING") // PENDING, COMPLETED, CANCELLED
  createdAt  DateTime @default(now())
  orderItems OrderItem[]
}

model OrderItem {
  id        String   @id @default(uuid())
  orderId   String
  order     Order    @relation(fields: [orderId], references: [id])
  productId String
  product   Product  @relation(fields: [productId], references: [id])
  quantity  Int
  price     Float    // Price at time of order
}
```

---

### **Technical Details**

### **API Routes**

#### **1. Products**
- **GET /api/products**
  - Description: Fetch all products.
  - Response: `Product[]` (array of products).
  - Example: `/api/products?category=electronics&sort=price_asc`
- **POST /api/products**
  - Description: Create a new product (admin only).
  - Body: `{ name, description, price, imageUrl, category, stock }`
  - Response: `Product`
- **PUT /api/products/[id]**
  - Description: Update a product (admin only).
  - Body: `{ name?, description?, price?, imageUrl?, category?, stock? }`
- **DELETE /api/products/[id]**
  - Description: Delete a product (admin only).

#### **2. Orders**
- **POST /api/orders**
  - Description: Create a new order.
  - Body: `{ userId, total, orderItems: { productId, quantity }[] }`
  - Response: `Order`
- **GET /api/orders**
  - Description: Fetch all orders (admin only) or user-specific orders.

#### **3. Authentication**
- Configured with NextAuth.js in `/api/auth/[...nextauth]`.
- Supports email/password or OAuth (e.g., Google).

---

### **Frontend Pages**

#### **1. Home Page (`/app/page.tsx`)**
- Displays a grid of products using `ProductCard` component.
- Includes a search bar and category filter.

#### **2. Product Details (`/app/products/[id]/page.tsx`)**
- Shows product details (name, price, description, image).
- "Add to Cart" button.

#### **3. Cart Page (`/app/cart/page.tsx`)**
- Lists items in the cart with quantity controls and a "Checkout" button.

#### **4. Checkout Page (`/app/checkout/page.tsx`)**
- Form for user details (name, email, address).
- Submits order to `/api/orders`.

#### **5. Admin Dashboard (`/app/admin/page.tsx`)**
- Protected route (admin only).
- Lists products with edit/delete options.
- Form to add new products.

---
