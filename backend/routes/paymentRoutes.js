const express = require('express')
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Model = require('../models/Paymentmodel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const razorpay = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET
});

// create order
router.post('/create-order', async (req, res) => {
    try {
        const options = {
            amount: req.body.amount * 100, // paisa
            currency: "INR",
            receipt: "order_rcptid_" + Date.now()
        };

        const order = await razorpay.orders.create(options);
        res.status(200).json(order);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// verify payment
router.post('/verify', (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
        .createHmac("sha256", process.env.KEY_SECRET)
        .update(body.toString())
        .digest("hex");

    if (expectedSignature === razorpay_signature) {
        res.status(200).json({ message: "Payment verified" });
    } else {
        res.status(400).json({ message: "Invalid signature" });
    }
});

// save payment
router.post('/save', (req, res) => {
    new Model(req.body).save()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});

// get all
router.get('/getall', (req, res) => {
    Model.find()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});

// get by user
router.get('/getbyuser/:userId', (req, res) => {
    Model.find({ userId: req.params.userId })
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});

// get by id
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});


router.post('/authenticate', (req, res) => {
    const { email, password } = req.body;
    Model.findOne({ email, password})
    .then((result) => {
         if(result){
            const { _id, email } = result;

            jwt.sign(
                { _id, email },
                process.env.JWT_SECRET,
                { expiresIn: '1h' },
                 (err, token) =>{ 
                     if(err){
                        console.log(err);
                        res.status(500).json({ message: 'error creating token' })    
                     } else {
                        res.status(201).json({ token });
                     }
                  }
            )

         } else{
            res.status(403).json({ message: 'credentials Invalid'});
         }
    }).catch((err) => {
        console.log(err);
        req.status(500).json(err);  
    });
});



module.exports = router;