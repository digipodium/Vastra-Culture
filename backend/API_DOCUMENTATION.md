# Vastra Culture Backend API Documentation

## Base URL
`http://localhost:5000`

## Authentication
Most routes require a JWT token. Include it in the Authorization header:
```
Authorization: Bearer <token>
```

---

## 🔐 AUTH ROUTES (`/auth`)

### POST `/auth/signup`
Create a new user account.
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```
Response: `{ token, user: { _id, name, email, role } }`

### POST `/auth/login`
Login with credentials.
```json
{
  "email": "john@example.com",
  "password": "password123",
  "role": "user" // Optional: 'user', 'supplier', or 'admin'
}
```
Response: `{ token, user: { _id, name, email, role } }`

### POST `/auth/forgot-password`
Request password reset token.
```json
{
  "email": "john@example.com"
}
```
Response: `{ resetToken, message }`

### POST `/auth/reset-password`
Reset password with token.
```json
{
  "resetToken": "...",
  "newPassword": "newpass123",
  "confirmPassword": "newpass123"
}
```

---

## 👤 USER ROUTES (`/user`)

### GET `/user/profile` ⭐ Protected
Get current user profile.

### GET `/user/getall` ⭐ Admin Only
Get all users.

### GET `/user/getbyid/:id`
Get user by ID.

### GET `/user/getbyemail/:email`
Get user by email.

### GET `/user/getbycity/:city`
Get users by city.

### PUT `/user/update/:id` ⭐ Protected
Update user profile.

### DELETE `/user/delete/:id` ⭐ Admin Only
Delete user.

### POST `/user/change-password` ⭐ Protected
Change password.
```json
{
  "currentPassword": "old123",
  "newPassword": "new123",
  "confirmPassword": "new123"
}
```

### POST `/user/wishlist/add/:productId` ⭐ Protected
Add product to wishlist.

### POST `/user/wishlist/remove/:productId` ⭐ Protected
Remove product from wishlist.

### GET `/user/wishlist` ⭐ Protected
Get user's wishlist.

---

## 📦 PRODUCT ROUTES (`/product`)

### POST `/product/add` ⭐ Supplier/Admin Only
Add new product.
```json
{
  "name": "T-Shirt",
  "price": 500,
  "category": "Men",
  "description": "Premium cotton t-shirt",
  "images": ["url1", "url2"],
  "stock": 50,
  "brand": "Vastra",
  "discount": 10
}
```

### GET `/product/getall`
Get all products (admin view).

### GET `/product/getpublished`
Get published products (public/frontend).

### GET `/product/getbycategory/:category`
Get products by category.

### GET `/product/getbysupplier/:supplierEmail`
Get products by supplier email.

### GET `/product/search/:keyword`
Search products by name, description, or category.

### GET `/product/getbyid/:id`
Get product details.

### PUT `/product/update/:id` ⭐ Supplier/Admin Only
Update product (owner/admin only).

### DELETE `/product/delete/:id` ⭐ Supplier/Admin Only
Delete product (owner/admin only).

### POST `/product/:productId/review` ⭐ Protected
Add review to product.
```json
{
  "rating": 5,
  "comment": "Great product!"
}
```

---

## ⭐ REVIEW ROUTES (`/review`)

### POST `/review/add` ⭐ Protected
Add review to product.

### GET `/review/getall`
Get all reviews.

### GET `/review/getbyproduct/:productId`
Get reviews for a product.

### GET `/review/getbyuser/:userId`
Get reviews by user.

### GET `/review/getbyid/:id`
Get review by ID.

### PUT `/review/update/:id` ⭐ Protected
Update review (owner/admin only).

### DELETE `/review/delete/:id` ⭐ Protected
Delete review (owner/admin only).

---

## 🛒 ORDER ROUTES (`/order`)

### POST `/order/add` ⭐ Protected
Create new order.
```json
{
  "orderItems": [
    {
      "product": "productId",
      "name": "T-Shirt",
      "image": "url",
      "price": 500,
      "quantity": 2
    }
  ],
  "shippingAddress": {
    "address": "123 Main St",
    "city": "Delhi",
    "postalCode": "110001",
    "country": "India"
  },
  "paymentMethod": "razorpay",
  "itemsPrice": 1000,
  "taxPrice": 180,
  "shippingPrice": 40,
  "totalPrice": 1220
}
```

### GET `/order/getall` ⭐ Admin Only
Get all orders.

### GET `/order/getbyuser/:userId` ⭐ Protected
Get orders for a user.

### GET `/order/myorders` ⭐ Protected
Get current user's orders.

### GET `/order/getbyid/:id` ⭐ Protected
Get order details.

### PUT `/order/update-status/:id` ⭐ Admin Only
Update order status.
```json
{
  "status": "shipped" // pending, processing, shipped, delivered, cancelled
}
```

### PUT `/order/cancel/:id` ⭐ Protected
Cancel order.

### DELETE `/order/delete/:id` ⭐ Admin Only
Delete order.

---

## 💳 PAYMENT ROUTES (`/payment`)

### POST `/payment/create-order` ⭐ Protected
Create Razorpay order.
```json
{
  "amount": 1220
}
```
Response: Razorpay order object

### POST `/payment/verify` ⭐ Protected
Verify payment.
```json
{
  "razorpay_order_id": "order_...",
  "razorpay_payment_id": "pay_...",
  "razorpay_signature": "signature_..."
}
```

---

## 🛠️ ADMIN ROUTES (`/admin`)

### Product Management
- `GET /admin/products` - Get all products
- `GET /admin/products/pending` - Get pending products
- `GET /admin/products/approved` - Get approved products
- `GET /admin/products/rejected` - Get rejected products
- `PUT /admin/products/approve/:id` - Approve product
```json
{
  "adminPrice": 450 // Optional: override product price
}
```
- `PUT /admin/products/reject/:id` - Reject product
```json
{
  "rejectionReason": "Poor quality images"
}
```
- `PUT /admin/products/update-price/:id` - Set admin price
- `PUT /admin/products/publish/:id` - Toggle publish status

### Order Management
- `GET /admin/orders` - Get all orders
- `GET /admin/orders/:id` - Get order details
- `PUT /admin/orders/:id/status` - Update order status

### User Management
- `GET /admin/users` - Get all users
- `GET /admin/users/:id` - Get user details
- `DELETE /admin/users/:id` - Delete user

### Dashboard
- `GET /admin/stats` - Get dashboard statistics

---

## Error Handling

All errors follow this format:
```json
{
  "message": "Error description",
  "error": { ... } // Only in development
}
```

### Common Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized (token missing)
- `403` - Forbidden (access denied)
- `404` - Not Found
- `500` - Server Error

---

## Testing with cURL

### Signup
```bash
curl -X POST http://localhost:5000/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com","password":"pass123","confirmPassword":"pass123"}'
```

### Login
```bash
curl -X POST http://localhost:5000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@test.com","password":"pass123"}'
```

### Protected Route (with token)
```bash
curl -X GET http://localhost:5000/user/profile \
  -H "Authorization: Bearer <your_token_here>"
```

---

## Setup Instructions

1. Install dependencies: `npm install`
2. Create `.env` file with required variables
3. Start server: `npm start` or `npm run dev`

## Environment Variables (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

---

**Last Updated**: April 2026
**Backend Version**: 1.0.0
