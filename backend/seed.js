require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  { name: 'Wireless Headphones', price: 79.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', description: 'High-quality wireless headphones' },
  { name: 'Smart Watch', price: 199.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', description: 'Feature-rich smartwatch' },
  { name: 'Laptop Backpack', price: 49.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', description: 'Durable laptop backpack' },
  { name: 'Coffee Maker', price: 89.99, category: 'Home', image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400', description: 'Automatic coffee maker' },
  { name: 'Running Shoes', price: 129.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', description: 'Comfortable running shoes' },
  { name: 'Desk Lamp', price: 34.99, category: 'Home', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400', description: 'LED desk lamp' },
  { name: 'Yoga Mat', price: 29.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400', description: 'Non-slip yoga mat' },
  { name: 'Bluetooth Speaker', price: 59.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400', description: 'Portable bluetooth speaker' },
  { name: 'Water Bottle', price: 19.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400', description: 'Insulated water bottle' },
  { name: 'Sunglasses', price: 149.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400', description: 'Polarized sunglasses' },
  { name: 'Phone Case', price: 24.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400', description: 'Protective phone case' },
  { name: 'Gaming Mouse', price: 69.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400', description: 'RGB gaming mouse' },
  { name: 'Notebook Set', price: 14.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400', description: 'Premium notebook set' },
  { name: 'Wall Clock', price: 39.99, category: 'Home', image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400', description: 'Modern wall clock' },
  { name: 'Dumbbell Set', price: 99.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400', description: 'Adjustable dumbbell set' },
  { name: 'Keyboard', price: 119.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400', description: 'Mechanical keyboard' },
  { name: 'Plant Pot', price: 22.99, category: 'Home', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400', description: 'Ceramic plant pot' },
  { name: 'Wallet', price: 44.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400', description: 'Leather wallet' },
  { name: 'USB Cable', price: 12.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400', description: 'Fast charging USB cable' },
  { name: 'Candle Set', price: 27.99, category: 'Home', image: 'https://images.unsplash.com/photo-1602874801006-e24b3e2a4e8d?w=400', description: 'Scented candle set' },
  { name: 'Tennis Racket', price: 159.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1617083278968-e6ee5e8b8e0d?w=400', description: 'Professional tennis racket' },
  { name: 'Monitor Stand', price: 54.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400', description: 'Adjustable monitor stand' },
  { name: 'Webcam', price: 89.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400', description: 'HD webcam' },
  { name: 'Throw Pillow', price: 18.99, category: 'Home', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400', description: 'Decorative throw pillow' },
  { name: 'Resistance Bands', price: 24.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400', description: 'Exercise resistance bands' },
  { name: 'Tablet Stand', price: 29.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=400', description: 'Adjustable tablet stand' },
  { name: 'LED Strip Lights', price: 32.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=400', description: 'RGB LED strip lights' },
  { name: 'Picture Frame', price: 16.99, category: 'Home', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400', description: 'Wooden picture frame' },
  { name: 'Jump Rope', price: 14.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=400', description: 'Speed jump rope' },
  { name: 'Phone Charger', price: 19.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1591290619762-c588f7e8e86f?w=400', description: 'Fast wireless charger' },
  { name: 'Bookshelf', price: 129.99, category: 'Home', image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400', description: 'Modern bookshelf' },
  { name: 'Gym Bag', price: 39.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', description: 'Spacious gym bag' },
  { name: 'Mouse Pad', price: 9.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400', description: 'Large gaming mouse pad' },
  { name: 'Power Bank', price: 44.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400', description: 'High capacity power bank' },
  { name: 'Vase', price: 34.99, category: 'Home', image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400', description: 'Glass decorative vase' },
  { name: 'Foam Roller', price: 29.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400', description: 'Muscle recovery foam roller' },
  { name: 'Cable Organizer', price: 12.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400', description: 'Cable management organizer' },
  { name: 'Earbuds', price: 49.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400', description: 'Wireless earbuds' },
  { name: 'Mirror', price: 59.99, category: 'Home', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=400', description: 'Round wall mirror' },
  { name: 'Fitness Tracker', price: 79.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400', description: 'Activity fitness tracker' },
  { name: 'Laptop Sleeve', price: 24.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400', description: 'Protective laptop sleeve' },
  { name: 'Smart Bulb', price: 19.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=400', description: 'WiFi smart bulb' },
  { name: 'Rug', price: 89.99, category: 'Home', image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=400', description: 'Area rug' },
  { name: 'Protein Shaker', price: 14.99, category: 'Sports', image: 'https://images.unsplash.com/photo-1622484211850-cc1f8dc6e2e1?w=400', description: 'Blender bottle shaker' },
  { name: 'Card Holder', price: 19.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400', description: 'Minimalist card holder' }
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('MongoDB connected');
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Database seeded with 45 products');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
