const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Review = require('../models/Review');
const Product = require('../models/Product');
const User = require('../models/usermodel');
const userAuth = require('../middleware/authMiddleware');
require('dotenv').config();

// Add review (protected)
router.post('/add', userAuth, async (req, res) => {
    try {
        const { productId, rating, comment } = req.body;

        if (!productId || !rating) {
            return res.status(400).json({ message: 'Product ID and rating are required' });
        }

        if (rating < 1 || rating > 5) {
            return res.status(400).json({ message: 'Rating must be between 1 and 5' });
        }

        // Check if product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const newReview = new Review({
            product: productId,
            user: req.user._id,
            name: req.user.name || 'Anonymous',
            rating: rating,
            comment: comment || ''
        });

        await newReview.save();

        // Populate the review
        await newReview.populate(['product', 'user']);

        res.status(201).json(newReview);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all reviews
router.get('/getall', async (req, res) => {
    try {
        const reviews = await Review.find()
            .populate('product')
            .populate('user', '-password')
            .sort({ createdAt: -1 });
        res.status(200).json(reviews);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// Get reviews by product
router.get('/getbyproduct/:productId', async (req, res) => {
    try {
        const reviews = await Review.find({ product: req.params.productId })
            .populate('user', '-password')
            .sort({ createdAt: -1 });
        res.status(200).json(reviews);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// Get reviews by user
router.get('/getbyuser/:userId', async (req, res) => {
    try {
        const reviews = await Review.find({ user: req.params.userId })
            .populate('product')
            .sort({ createdAt: -1 });
        res.status(200).json(reviews);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// Get review by ID
router.get('/getbyid/:id', async (req, res) => {
    try {
        const review = await Review.findById(req.params.id)
            .populate('product')
            .populate('user', '-password');
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json(review);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// Update review (user/admin only)
router.put('/update/:id', userAuth, async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }

        // Check if user is review owner or admin
        if (review.user.toString() !== req.user._id && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        const updatedReview = await Review.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ).populate('product').populate('user', '-password');

        res.status(200).json(updatedReview);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// Delete review (user/admin only)
router.delete('/delete/:id', userAuth, async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }

        // Check if user is review owner or admin
        if (review.user.toString() !== req.user._id && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        await Review.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// Generate token for user
router.post('/token', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) return res.status(500).json({ error: 'Token generation failed' });
                res.json({ token });
            }
        );

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;