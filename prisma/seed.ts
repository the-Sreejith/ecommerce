const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.orderItem.deleteMany({});
  await prisma.order.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.user.deleteMany({});

  console.log('Seeding database...');

  // Create users
  const admin = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'ADMIN',
    },
  });

  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      name: 'John Doe',
      role: 'USER',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      name: 'Jane Smith',
      role: 'USER',
    },
  });

  console.log('Created users');

  // Create products
  const products = await Promise.all([
    // Electronics
    prisma.product.create({
      data: {
        name: 'Smartphone X',
        description: 'Latest smartphone with advanced features',
        price: 899.99,
        imageUrl: 'https://placehold.co/600x400?text=Smartphone',
        category: 'Electronics',
        stock: 50,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Laptop Pro',
        description: 'High-performance laptop for professionals',
        price: 1299.99,
        imageUrl: 'https://placehold.co/600x400?text=Laptop',
        category: 'Electronics',
        stock: 30,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Wireless Headphones',
        description: 'Premium noise-cancelling headphones',
        price: 249.99,
        imageUrl: 'https://placehold.co/600x400?text=Headphones',
        category: 'Electronics',
        stock: 100,
      },
    }),

    // Clothing
    prisma.product.create({
      data: {
        name: 'Cotton T-Shirt',
        description: 'Comfortable 100% cotton t-shirt',
        price: 19.99,
        imageUrl: 'https://placehold.co/600x400?text=TShirt',
        category: 'Clothing',
        stock: 200,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Denim Jeans',
        description: 'Classic denim jeans with perfect fit',
        price: 59.99,
        imageUrl: 'https://placehold.co/600x400?text=Jeans',
        category: 'Clothing',
        stock: 150,
      },
    }),

    // Home
    prisma.product.create({
      data: {
        name: 'Coffee Maker',
        description: 'Automatic coffee maker with timer',
        price: 89.99,
        imageUrl: 'https://placehold.co/600x400?text=CoffeeMaker',
        category: 'Home',
        stock: 40,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Bed Sheets Set',
        description: 'Luxury Egyptian cotton bed sheets',
        price: 79.99,
        imageUrl: 'https://placehold.co/600x400?text=BedSheets',
        category: 'Home',
        stock: 75,
      },
    }),
  ]);

  console.log('Created products');

  // Create orders
  const order1 = await prisma.order.create({
    data: {
      userId: user1.id,
      total: 1149.98,
      status: 'COMPLETED',
      orderItems: {
        create: [
          {
            productId: products[0].id, // Smartphone
            quantity: 1,
            price: products[0].price,
          },
          {
            productId: products[2].id, // Headphones
            quantity: 1,
            price: products[2].price,
          },
        ],
      },
    },
    include: {
      orderItems: true,
    },
  });

  const order2 = await prisma.order.create({
    data: {
      userId: user2.id,
      total: 1299.99,
      status: 'COMPLETED',
      orderItems: {
        create: [
          {
            productId: products[1].id, // Laptop
            quantity: 1,
            price: products[1].price,
          },
        ],
      },
    },
    include: {
      orderItems: true,
    },
  });

  const order3 = await prisma.order.create({
    data: {
      userId: user1.id,
      total: 79.98,
      status: 'PENDING',
      orderItems: {
        create: [
          {
            productId: products[3].id, // T-Shirt
            quantity: 4,
            price: products[3].price,
          },
        ],
      },
    },
    include: {
      orderItems: true,
    },
  });

  console.log('Created orders');
  console.log('Database seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 