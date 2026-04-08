const express = require('express')
const router = express.Router();
const Model = require('../models/Reviewmodel');
const jwt = require('jsonwebtoken');
require('dotenv').config();


// add review
router.post('/add', (req, res) => {
    
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err); 
    });

});

// getall
router.get('/getall', (req, res) => {
    
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err); 
    });

});
// getbyproduct
router.get('/getbyproduct/:productId', (req, res) => {
    Model.findOne({ email: req.params.product })
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// getbyuser

router.get('/getbyuser/:userId', (req, res) => {
    Model.find({ city: req.params.user })
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// getbyid
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


// delete
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update

router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id , req.body )
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
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