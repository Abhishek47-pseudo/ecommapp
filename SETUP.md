# Quick Setup Guide

## Step-by-Step Instructions

### 1. Install MongoDB

**Option A: Local MongoDB**
- Download from https://www.mongodb.com/try/download/community
- Install and start MongoDB service

**Option B: MongoDB Atlas (Cloud)**
- Sign up at https://www.mongodb.com/cloud/atlas
- Create a free cluster
- Get your connection string

### 2. Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
echo PORT=5000 > .env
echo MONGODB_URI=mongodb://localhost:27017/ecommerce >> .env

# Seed database with products
npm run seed

# Start backend server
npm run dev
```

You should see:
```
Server running on port 5000
MongoDB Connected: localhost
```

### 3. Frontend Setup

Open a new terminal:

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Create .env file
echo REACT_APP_API_URL=http://localhost:5000/api > .env

# Start React app
npm start
```

Browser will open at `http://localhost:3000`

### 4. Test the Application

1. You should see 30 products displayed
2. Try filtering by category
3. Try filtering by price range
4. Navigate through pages using pagination

### 5. Push to GitHub

```bash
# From project root
git init
git add .
git commit -m "Phase 1: E-commerce application complete"

# Create a new repository on GitHub, then:
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check your MONGODB_URI in backend/.env
- For Atlas, ensure your IP is whitelisted

### Port Already in Use
- Backend: Change PORT in backend/.env
- Frontend: It will prompt to use a different port

### CORS Error
- Ensure backend is running on port 5000
- Check REACT_APP_API_URL in frontend/.env

### Products Not Loading
- Check backend console for errors
- Verify database was seeded: `npm run seed` in backend
- Check browser console for API errors

## Default Configuration

- Backend: http://localhost:5000
- Frontend: http://localhost:3000
- Database: mongodb://localhost:27017/ecommerce
- Products per page: 20

## Need Help?

Check the main README.md for detailed documentation.
