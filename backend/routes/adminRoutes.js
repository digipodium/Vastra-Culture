const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Order = require('../models/Order');
const User = require('../models/usermodel');
const userAuth = require('../middleware/authMiddleware');

// Admin check middleware
const adminCheck = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};

// Get pending products
router.get('/products/pending', userAuth, adminCheck, async (req, res) => {
    try {
        const products = await Product.find({ status: 'pending' })
            .populate('supplier', 'name email')
            .sort({ createdAt: -1 });
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Approve product
router.post('/approve-product/:id', userAuth, adminCheck, async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { status: 'approved' },
            { new: true }
        );
        res.json({ message: 'Product approved', product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Reject product
router.post('/reject-product/:id', userAuth, adminCheck, async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { status: 'rejected' },
            { new: true }
        );
        res.json({ message: 'Product rejected', product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get dashboard stats
router.get('/stats', userAuth, adminCheck, async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalProducts = await Product.countDocuments();
        const totalOrders = await Order.countDocuments();
        const totalRevenue = (await Order.aggregate([
            { $group: { _id: null, total: { $sum: '$totalPrice' } } }
        ]))[0]?.total || 0;

        res.json({
            totalUsers,
            totalProducts,
            totalOrders,
            totalRevenue,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

