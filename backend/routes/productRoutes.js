const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const userAuth = require('../middleware/authMiddleware');

// Create product (supplier only)
router.post('/create', userAuth, async (req, res) => {
    try {
        if (req.user.role !== 'supplier' && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Only suppliers can add products' });
        }

        const { name, description, price, category, image, stock } = req.body;

        if (!name || !description || !price || !category) {
            return res.status(400).json({ message: 'All fields required' });
        }

        const product = new Product({
            name,
            description,
            price,
            category,
            image,
            stock,
            supplier: req.user.id,
            status: 'pending',
        });

        await product.save();
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all approved products
router.get('/all', async (req, res) => {
    try {
        const products = await Product.find({ status: 'approved' })
            .populate('supplier', 'name email')
            .populate('reviews');
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
            .populate('supplier', 'name email')
            .populate('reviews');
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update product (supplier only)
router.put('/update/:id', userAuth, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (product.supplier.toString() !== req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ message: 'Product updated', product: updated });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete product (supplier only)
router.delete('/delete/:id', userAuth, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        if (product.supplier.toString() !== req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
