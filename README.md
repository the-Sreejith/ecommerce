# E-commerce Application

A modern e-commerce platform built with Next.js, TypeScript, Tailwind CSS, and Prisma.

## Features

- **User Features**
  - Browse products with filtering and sorting
  - View product details
  - Add products to cart
  - Manage cart (update quantities, remove items)
  - Checkout process
  
- **Admin Features**
  - Manage products (add, edit, delete)
  - View orders

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce.git
   cd ecommerce
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with the following variables:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/ecommerce"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. Initialize the database:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Seed the database with initial data:
   ```bash
   npx prisma db seed
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app` - Next.js app router pages and API routes
- `/components` - Reusable UI components
- `/lib` - Utility functions and shared code
- `/prisma` - Prisma schema and migrations
- `/types` - TypeScript type definitions

## API Routes

- **GET /api/products** - Get all products (with optional filtering)
- **POST /api/products** - Create a new product (admin only)
- **GET /api/products/[id]** - Get a specific product
- **PUT /api/products/[id]** - Update a product (admin only)
- **DELETE /api/products/[id]** - Delete a product (admin only)
- **GET /api/orders** - Get all orders (admin) or user's orders
- **POST /api/orders** - Create a new order


