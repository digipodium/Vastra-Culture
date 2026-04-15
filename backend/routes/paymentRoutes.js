const express = require('express');
const router = express.Router();
const userAuth = require('../middleware/authMiddleware');
require('dotenv').config();

// Import Razorpay (will work if razorpay package is installed)
let razorpay;
try {
    const Razorpay = require('razorpay');
    razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET
    });
} catch (err) {
    console.log('Razorpay not configured:', err.message);
}

// Create order
router.post('/create-order', userAuth, async (req, res) => {
    try {
        if (!razorpay) {
            return res.status(503).json({ message: 'Payment service not available' });
        }

        const { amount } = req.body;

        if (!amount || amount <= 0) {
            return res.status(400).json({ message: 'Invalid amount' });
        }

        const options = {
            amount: Math.round(amount * 100), // Convert to paisa
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            notes: {
                userId: req.user._id,
                email: req.user.email
            }
        };

        const order = await razorpay.orders.create(options);
        res.status(200).json(order);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to create order', error: error.message });
    }
});

// Verify payment
router.post('/verify', userAuth, async (req, res) => {
    try {
        if (!razorpay) {
            return res.status(503).json({ message: 'Payment service not available' });
        }

        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({ message: 'Missing payment details' });
        }

        const crypto = require('crypto');
        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest("hex");

        if (expectedSignature === razorpay_signature) {
            res.status(200).json({ 
                message: "Payment verified successfully",
                verified: true 
            });
        } else {
            res.status(400).json({ 
                message: "Invalid signature",
                verified: false 
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Verification failed', error: error.message });
    }
});

module.exports = router;
