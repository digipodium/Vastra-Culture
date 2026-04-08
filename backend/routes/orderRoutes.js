const express = require('express')
const router = express.Router();
const Model = require('../models/Ordermodel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// create order
router.post('/add', (req, res) => {
    new Model(req.body).save()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});

// get all (admin)
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

// get by supplier
router.get('/getbysupplier/:supplierId', (req, res) => {
    Model.find({ supplierId: req.params.supplierId })
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});

// get by id
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});


// update status
router.put('/update-status/:id', (req, res) => {
    Model.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true }
    )
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});

// cancel order
router.put('/cancel/:id', (req, res) => {
    Model.findByIdAndUpdate(
        req.params.id,
        { status: 'cancelled' },
        { new: true }
    )
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json(err));
});

// delete
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
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