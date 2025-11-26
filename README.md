# 🛍️ E-Commerce MERN Application

A full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js). Features a modern, responsive UI with product filtering, pagination, and a beautiful gradient design.

## ✨ Features

- **Product Catalog**: Browse through 45+ sample products across multiple categories
- **Advanced Filtering**: Filter products by category and price range
- **Pagination**: Smooth navigation with 20 products per page
- **Responsive Design**: Modern gradient-themed UI that works on all devices
- **RESTful API**: Clean backend architecture with Express.js
- **Real-time Updates**: Dynamic product loading with React

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (v4.4 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**
   
   The backend uses a `.env` file for configuration. Default values:
   ```env
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   PORT=5000
   ```

4. **Seed the Database**
   ```bash
   npm run seed
   ```
   This will populate your database with 45 sample products.

5. **Start the Backend Server**
   ```bash
   npm start
   ```
   Server will run on `http://localhost:5000`

6. **Set up the Frontend** (in a new terminal)
   ```bash
   cd frontend
   npm install
   npm start
   ```
   React app will run on `http://localhost:3000`

## 📁 Project Structure

```
.
├── backend/
│   ├── models/
│   │   └── Product.js          # Product schema
│   ├── .env                    # Environment variables
│   ├── server.js               # Express server & API routes
│   ├── seed.js                 # Database seeding script
│   └── package.json
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── App.js              # Main React component
    │   ├── App.css             # Application styles
    │   ├── index.js            # React entry point
    │   └── index.css           # Global styles
    └── package.json
```

## 🔌 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### Get Products
```http
GET /products
```

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | number | Page number (default: 1) |
| `category` | string | Filter by category |
| `minPrice` | number | Minimum price filter |
| `maxPrice` | number | Maximum price filter |

**Response:**
```json
{
  "products": [...],
  "currentPage": 1,
  "totalPages": 3,
  "totalProducts": 45
}
```

#### Get Categories
```http
GET /categories
```

**Response:**
```json
["Electronics", "Clothing", "Books", ...]
```

## 🛠️ Tech Stack

### Frontend
- **React** 18.2.0 - UI library
- **Axios** 1.5.0 - HTTP client
- **CSS3** - Styling with modern gradients

### Backend
- **Node.js** - Runtime environment
- **Express** 4.18.2 - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** 7.5.0 - ODM for MongoDB
- **CORS** 2.8.5 - Cross-origin resource sharing
- **dotenv** 16.3.1 - Environment variable management

## 🎨 Features in Detail

### Product Filtering
- Filter by category from a dynamic list
- Set minimum and maximum price ranges
- Clear all filters with one click
- Filters automatically reset pagination

### Pagination
- 20 products per page for optimal loading
- Previous/Next navigation
- Current page indicator
- Disabled buttons at boundaries

### Product Schema
```javascript
{
  name: String,
  price: Number,
  category: String,
  image: String,
  description: String
}
```

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod` or check your MongoDB service
- Verify connection string in `backend/.env`
- Check if port 27017 is available

### Port Already in Use
- Backend (5000): Change `PORT` in `backend/.env`
- Frontend (3000): React will prompt to use another port

### CORS Errors
- Ensure backend server is running
- Check that CORS is enabled in `server.js`
- Verify API URL in frontend matches backend port

## 📝 Available Scripts

### Backend
- `npm start` - Start the Express server
- `npm run seed` - Seed database with sample products

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] Shopping cart functionality
- [ ] Product search
- [ ] Product details page
- [ ] Order management
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Product reviews and ratings
- [ ] Wishlist feature

