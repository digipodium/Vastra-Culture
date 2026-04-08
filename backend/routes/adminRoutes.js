const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products (for admin dashboard)
router.get('/products', (req, res) => {
    Product.find().sort({ createdAt: -1 })
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});

// Get only pending products
router.get('/products/pending', (req, res) => {
    Product.find({ status: 'pending' }).sort({ createdAt: -1 })
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});

// Get only approved products
router.get('/products/approved', (req, res) => {
    Product.find({ status: 'approved' }).sort({ createdAt: -1 })
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});

// Get only rejected products
router.get('/products/rejected', (req, res) => {
    Product.find({ status: 'rejected' }).sort({ createdAt: -1 })
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});

// Approve a product
router.put('/products/approve/:id', (req, res) => {
    const { adminPrice } = req.body;
    const updateData = { status: 'approved', isPublished: true, rejectionReason: '' };
    if (adminPrice !== undefined && adminPrice !== null) {
        updateData.adminPrice = adminPrice;
    }
    Product.findByIdAndUpdate(req.params.id, updateData, { new: true })
    .then(result => {
        if (!result) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(result);
    })
    .catch(err => res.status(500).json(err));
});

// Reject a product
router.put('/products/reject/:id', (req, res) => {
    const { rejectionReason } = req.body;
    Product.findByIdAndUpdate(req.params.id, { 
        status: 'rejected', 
        rejectionReason: rejectionReason || 'No reason provided',
        isPublished: false 
    }, { new: true })
    .then(result => {
        if (!result) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(result);
    })
    .catch(err => res.status(500).json(err));
});

// Update admin price
router.put('/products/update-price/:id', (req, res) => {
    const { adminPrice } = req.body;
    Product.findByIdAndUpdate(req.params.id, { adminPrice }, { new: true })
    .then(result => {
        if (!result) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(result);
    })
    .catch(err => res.status(500).json(err));
});

// Toggle publish status
router.put('/products/publish/:id', (req, res) => {
    Product.findById(req.params.id)
    .then(product => {
        if (!product) return res.status(404).json({ message: 'Product not found' });
        if (product.status !== 'approved') {
            return res.status(400).json({ message: 'Only approved products can be published' });
        }
        product.isPublished = !product.isPublished;
        return product.save();
    })
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});

// Dashboard stats
router.get('/stats', (req, res) => {
    Promise.all([
        Product.countDocuments(),
        Product.countDocuments({ status: 'pending' }),
        Product.countDocuments({ status: 'approved' }),
        Product.countDocuments({ status: 'rejected' }),
        Product.countDocuments({ isPublished: true }),
    ])
    .then(([total, pending, approved, rejected, published]) => {
        res.status(200).json({ total, pending, approved, rejected, published });
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
