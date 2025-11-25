# E-Commerce Application - Phase 1

A modern full-stack e-commerce application built with React, Node.js, Express, and MongoDB.

## Features

- 🛍️ Product catalog with 30+ sample products
- 🔍 Advanced filtering (category, price range)
- 📄 Pagination (20 products per page)
- 🎨 Modern, responsive design
- ⚡ Fast and efficient API
- 📱 Mobile-friendly interface

## Tech Stack

### Frontend
- React 18
- Axios for API calls
- CSS3 with modern design
- Responsive grid layout

### Backend
- Node.js & Express
- MongoDB with Mongoose
- RESTful API architecture
- CORS enabled

## Project Structure

```
ecommerce-app/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── models/
│   │   └── Product.js         # Product schema
│   ├── routes/
│   │   └── products.js        # Product routes
│   ├── server.js              # Express server
│   ├── seed.js                # Database seeder
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductList.js
│   │   │   ├── ProductCard.js
│   │   │   ├── Filters.js
│   │   │   ├── Pagination.js
│   │   │   └── *.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your MongoDB URI:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
```

5. Seed the database with sample products:
```bash
npm run seed
```

6. Start the backend server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Start the React app:
```bash
npm start
```

Frontend will run on `http://localhost:3000`

## API Endpoints

### Products

- `GET /api/products` - Get products with pagination and filters
  - Query params:
    - `page` (default: 1)
    - `limit` (default: 20)
    - `category` (optional)
    - `minPrice` (optional)
    - `maxPrice` (optional)

- `GET /api/products/categories` - Get all product categories

- `GET /api/products/:id` - Get single product by ID

## Features Implemented

### Phase 1 Checklist ✅

- [x] Backend API with Node.js and Express
- [x] MongoDB database with Mongoose
- [x] Product model with all necessary fields
- [x] Database seeder with 30 sample products
- [x] RESTful API endpoints for products
- [x] Pagination support (20 products per page)
- [x] Category filter
- [x] Price range filter
- [x] React frontend with modern design
- [x] Product listing page
- [x] Product cards with images and details
- [x] Filter sidebar
- [x] Pagination component
- [x] Responsive design
- [x] Professional UI/UX

## Product Categories

- Electronics
- Clothing
- Books
- Home & Garden
- Sports
- Toys

## Design Features

- Modern gradient header
- Card-based product layout
- Hover effects and animations
- Sticky filter sidebar
- Responsive grid system
- Clean typography
- Professional color scheme (Purple gradient theme)
- Stock indicators
- Star ratings
- Price highlighting

## Git Setup

Initialize and push to GitHub:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Phase 1: Complete e-commerce application with React, Node.js, and MongoDB"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/ecommerce-app.git

# Push to GitHub
git push -u origin main
```

## Future Enhancements (Phase 2+)

- Shopping cart functionality
- User authentication
- Product details page
- Checkout process
- Order management
- Payment integration
- Product search
- Wishlist
- Product reviews
- Admin dashboard

## License

MIT

## Author

Your Name

---

**Phase 1 Complete** ✅
