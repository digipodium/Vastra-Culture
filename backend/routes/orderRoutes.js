const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const userAuth = require('../middleware/authMiddleware');

// Create order
router.post('/create', userAuth, async (req, res) => {
    try {
        const { products, totalPrice, shippingAddress, paymentMethod } = req.body;

        if (!products || !totalPrice || !shippingAddress) {
            return res.status(400).json({ message: 'All fields required' });
        }

        const order = new Order({
            user: req.user.id,
            products,
            totalPrice,
            shippingAddress,
            paymentMethod: paymentMethod || 'cod',
        });

        await order.save();
        await order.populate('products.product user');

        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all orders (admin only)
router.get('/all', userAuth, async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        const orders = await Order.find()
            .populate('user', 'name email')
            .populate('products.product')
            .sort({ createdAt: -1 });

        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get user orders
router.get('/user/my-orders', userAuth, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id })
            .populate('products.product')
            .sort({ createdAt: -1 });

        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get order by ID
router.get('/:id', userAuth, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('user', 'name email')
            .populate('products.product');

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        if (order.user._id.toString() !== req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update order status (admin only)
router.put('/update/:id', userAuth, async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        const { status, paymentStatus } = req.body;
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { status, paymentStatus },
            { new: true }
        ).populate('user').populate('products.product');

        res.json({ message: 'Order updated', order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
