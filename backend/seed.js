require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  // Electronics
  { name: 'Wireless Headphones', description: 'Premium noise-cancelling wireless headphones with 30-hour battery life', price: 199.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', stock: 50, rating: 4.5 },
  { name: 'Smart Watch', description: 'Fitness tracking smartwatch with heart rate monitor', price: 299.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', stock: 30, rating: 4.3 },
  { name: 'Laptop Stand', description: 'Ergonomic aluminum laptop stand', price: 49.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400', stock: 100, rating: 4.7 },
  { name: 'Wireless Mouse', description: 'Ergonomic wireless mouse with precision tracking', price: 29.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400', stock: 75, rating: 4.4 },
  { name: '4K Monitor', description: '27-inch 4K UHD monitor with HDR support', price: 399.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400', stock: 25, rating: 4.6 },
  
  // Clothing
  { name: 'Cotton T-Shirt', description: 'Comfortable 100% cotton t-shirt', price: 24.99, category: 'Clothing', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', stock: 200, rating: 4.2 },
  { name: 'Denim Jeans', description: 'Classic fit denim jeans', price: 59.99, category: 'Clothing', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400', stock: 150, rating: 4.5 },
  { name: 'Winter Jacket', description: 'Warm insulated winter jacket', price: 129.99, category: 'Clothing', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', stock: 60, rating: 4.8 },
  { name: 'Running Shoes', description: 'Lightweight running shoes with cushioned sole', price: 89.99, category: 'Clothing', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', stock: 80, rating: 4.6 },
  { name: 'Baseball Cap', description: 'Adjustable cotton baseball cap', price: 19.99, category: 'Clothing', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400', stock: 120, rating: 4.1 },
  
  // Books
  { name: 'JavaScript Guide', description: 'Complete guide to modern JavaScript', price: 39.99, category: 'Books', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400', stock: 90, rating: 4.7 },
  { name: 'Design Patterns', description: 'Software design patterns explained', price: 44.99, category: 'Books', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400', stock: 70, rating: 4.8 },
  { name: 'Cooking Basics', description: 'Essential cooking techniques for beginners', price: 29.99, category: 'Books', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400', stock: 85, rating: 4.4 },
  { name: 'Photography 101', description: 'Learn the fundamentals of photography', price: 34.99, category: 'Books', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400', stock: 65, rating: 4.5 },
  { name: 'Fitness Guide', description: 'Complete home workout and nutrition guide', price: 27.99, category: 'Books', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400', stock: 95, rating: 4.3 },
  
  // Home & Garden
  { name: 'Plant Pot Set', description: 'Set of 3 ceramic plant pots', price: 34.99, category: 'Home & Garden', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400', stock: 110, rating: 4.6 },
  { name: 'LED Desk Lamp', description: 'Adjustable LED desk lamp with USB charging', price: 45.99, category: 'Home & Garden', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400', stock: 70, rating: 4.5 },
  { name: 'Throw Pillow', description: 'Soft decorative throw pillow', price: 22.99, category: 'Home & Garden', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400', stock: 140, rating: 4.2 },
  { name: 'Wall Clock', description: 'Modern minimalist wall clock', price: 38.99, category: 'Home & Garden', image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400', stock: 55, rating: 4.4 },
  { name: 'Garden Tool Set', description: 'Complete 5-piece garden tool set', price: 54.99, category: 'Home & Garden', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400', stock: 45, rating: 4.7 },
  
  // Sports
  { name: 'Yoga Mat', description: 'Non-slip exercise yoga mat', price: 32.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400', stock: 100, rating: 4.6 },
  { name: 'Dumbbell Set', description: 'Adjustable dumbbell set 5-25 lbs', price: 89.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400', stock: 40, rating: 4.8 },
  { name: 'Tennis Racket', description: 'Professional tennis racket', price: 119.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400', stock: 35, rating: 4.5 },
  { name: 'Water Bottle', description: 'Insulated stainless steel water bottle', price: 24.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400', stock: 150, rating: 4.4 },
  { name: 'Resistance Bands', description: 'Set of 5 resistance bands', price: 19.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400', stock: 130, rating: 4.3 },
  
  // Toys
  { name: 'Building Blocks', description: 'Creative building blocks set 500 pieces', price: 44.99, category: 'Toys', image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400', stock: 80, rating: 4.7 },
  { name: 'Puzzle Game', description: '1000-piece jigsaw puzzle', price: 19.99, category: 'Toys', image: 'https://images.unsplash.com/photo-1587731556938-38755b4803a6?w=400', stock: 95, rating: 4.5 },
  { name: 'Remote Control Car', description: 'High-speed RC car with rechargeable battery', price: 69.99, category: 'Toys', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', stock: 50, rating: 4.6 },
  { name: 'Board Game', description: 'Family strategy board game', price: 34.99, category: 'Toys', image: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400', stock: 70, rating: 4.8 },
  { name: 'Art Supply Kit', description: 'Complete art supplies for kids', price: 39.99, category: 'Toys', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400', stock: 60, rating: 4.4 }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');

    await Product.deleteMany({});
    console.log('Cleared existing products');

    await Product.insertMany(products);
    console.log('30 products added successfully');

    mongoose.connection.close();
    console.log('Database seeded and connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
