# Backend Setup & Testing Guide

## 📋 Prerequisites
- Node.js (v18+) installed
- MongoDB Atlas account (or local MongoDB)
- Git

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd backend
npm install
```

This will install:
- `express` - Web framework
- `mongoose` - MongoDB ORM
- `bcrypt` - Password hashing
- `jsonwebtoken` - JWT authentication
- `cors` - Cross-origin requests
- `dotenv` - Environment variables
- `nodemon` - Development auto-reload

### 2. Configure Environment
Create/update `.env` file:
```
PORT=5000
MONGODB_URI=mongodb+srv://prabhatmauryaa:Prabhat2004@cluster0.mofottb.mongodb.net/mydb?appName=Cluster0
JWT_SECRET=MYSECRET
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
RAZORPAY_KEY_ID=your_key_id_here
RAZORPAY_KEY_SECRET=your_key_secret_here
```

### 3. Start Backend Server
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Expected output:
```
✓ Database connected successfully
✓ Server started on http://localhost:5000
```

---

## 🧪 Testing the API

### Using Postman or cURL

#### 1. Signup for New User
```bash
POST http://localhost:5000/auth/signup
Content-Type: application/json

{
  "name": "Test User",
  "email": "test@example.com",
  "password": "Test@123",
  "confirmPassword": "Test@123"
}
```

**Response:**
```json
{
  "message": "User created successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "_id": "65abc123...",
    "name": "Test User",
    "email": "test@example.com",
    "role": "user"
  }
}
```

#### 2. Login
```bash
POST http://localhost:5000/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "Test@123"
}
```

**Response:** (same as signup)

**Save the token for next requests!**

#### 3. Get User Profile (Protected)
```bash
GET http://localhost:5000/user/profile
Authorization: Bearer <YOUR_TOKEN_HERE>
```

#### 4. Add a Product (Supplier/Admin)
```bash
POST http://localhost:5000/product/add
Authorization: Bearer <YOUR_TOKEN_HERE>
Content-Type: application/json

{
  "name": "Classic White T-Shirt",
  "price": 599,
  "category": "Men",
  "description": "Premium quality cotton t-shirt",
  "brand": "Vastra Culture",
  "images": [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500"
  ],
  "stock": 100,
  "discount": 15
}
```

#### 5. Get Published Products (Frontend View)
```bash
GET http://localhost:5000/product/getpublished
```

#### 6. Create an Order (Protected)
```bash
POST http://localhost:5000/order/add
Authorization: Bearer <YOUR_TOKEN_HERE>
Content-Type: application/json

{
  "orderItems": [
    {
      "product": "PRODUCT_ID_HERE",
      "name": "Classic White T-Shirt",
      "image": "url",
      "price": 599,
      "quantity": 2
    }
  ],
  "shippingAddress": {
    "address": "123 Main Street",
    "city": "New Delhi",
    "postalCode": "110001",
    "country": "India"
  },
  "paymentMethod": "razorpay",
  "itemsPrice": 1198,
  "taxPrice": 215,
  "shippingPrice": 40,
  "totalPrice": 1453
}
```

---

## 🔐 Authentication Flow

```
1. User Signs Up / Logs In
   ↓
2. Backend generates JWT token
   ↓
3. Frontend stores token (localStorage/cookies)
   ↓
4. For protected routes, frontend sends:
   Authorization: Bearer <token>
   ↓
5. Backend validates token
   ↓
6. Request processed or rejected
```

---

## 📊 Database Schema Overview

### User Collection
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: 'user' | 'supplier' | 'admin',
  phone: String,
  address: String,
  city: String,
  state: String,
  country: String,
  postalCode: String,
  wishlist: [ObjectId], // References to Products
  createdAt: Date,
  updatedAt: Date
}
```

### Product Collection
```javascript
{
  name: String,
  price: Number,
  category: String,
  description: String,
  brand: String,
  images: [String],
  stock: Number,
  rating: Number,
  numReviews: Number,
  reviews: [Review],
  status: 'pending' | 'approved' | 'rejected',
  isPublished: Boolean,
  discount: Number,
  supplierEmail: String,
  adminPrice: Number,
  rejectionReason: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Order Collection
```javascript
{
  user: ObjectId,
  orderItems: [
    {
      product: ObjectId,
      name: String,
      image: String,
      price: Number,
      quantity: Number
    }
  ],
  shippingAddress: {
    address: String,
    city: String,
    postalCode: String,
    country: String
  },
  paymentMethod: String,
  paymentResult: {
    id: String,
    status: String,
    update_time: String,
    email_address: String
  },
  itemsPrice: Number,
  taxPrice: Number,
  shippingPrice: Number,
  totalPrice: Number,
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled',
  isPaid: Boolean,
  paidAt: Date,
  isDelivered: Boolean,
  deliveredAt: Date,
  createdAt: Date,
  updatedAt: Date
}
```

---

## ⚙️ Configuration Files

### Connection.js
Handles MongoDB connection with error handling and reconnection logic.

### Middleware (authMiddleware.js)
- Validates JWT tokens
- Extracts user info
- Protects routes

### Routes
- **authRoutes.js** - Authentication (signup, login, password reset)
- **userRoutes.js** - User management, profile, wishlist
- **productRoutes.js** - Product CRUD, reviews
- **orderRoutes.js** - Order management
- **reviewRoutes.js** - Review management
- **adminRoutes.js** - Admin dashboard, approvals
- **paymentRoutes.js** - Razorpay integration

---

## 🐛 Troubleshooting

### Database Connection Issues
- Check MongoDB connection string in .env
- Ensure internet connection for MongoDB Atlas
- Verify IP is whitelisted in MongoDB Atlas

### Token Errors
- Ensure token is included: `Authorization: Bearer <token>`
- Token format should be: `Bearer eyJhbGc...`
- Token may have expired (7 days)

### CORS Errors
- Ensure `FRONTEND_URL` matches frontend origin
- Check CORS configuration in index.js

### Port Already in Use
```bash
# Kill process on port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -i :5000
kill -9 <PID>
```

---

## 📝 API Response Formats

### Success Response (200)
```json
{
  "data": {...},
  "message": "Success"
}
```

### Error Response (4xx, 5xx)
```json
{
  "message": "Error description",
  "error": { ... } // Development only
}
```

---

## 🚢 Deployment Checklist

- [ ] Set `NODE_ENV=production` in .env
- [ ] Use strong `JWT_SECRET`
- [ ] Configure production MongoDB URI
- [ ] Set up properly CORS origins
- [ ] Enable HTTPS
- [ ] Rate limiting
- [ ] Error monitoring (Sentry)
- [ ] Database backups

---

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [JWT.io](https://jwt.io/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

**Last Updated**: April 2026
