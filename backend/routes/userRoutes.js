const express = require('express')
const router = express.Router();
const Model = require('../models/Usermodel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// add
router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
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
// getbyemail
router.get('/getbyemail/:email', (req, res) => {
    Model.findOne({ email: req.params.email })
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// getbycity

router.get('/getbycity/:city', (req, res) => {
    Model.find({ city: req.params.city })
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
        res.status(500).json(err);  
    });
});

// forgot-password - verify email exists and return reset token
router.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    Model.findOne({ email })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: 'No account found with this email' });
            }
            // Generate a short-lived reset token (15 min)
            const resetToken = jwt.sign(
                { _id: user._id, email: user.email, purpose: 'password-reset' },
                process.env.JWT_SECRET,
                { expiresIn: '15m' }
            );
            res.status(200).json({ resetToken, message: 'Email verified. You can reset your password.' });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: 'Server error' });
        });
});

// reset-password - verify token and update password
router.post('/reset-password', (req, res) => {
    const { resetToken, newPassword } = req.body;
    try {
        const decoded = jwt.verify(resetToken, process.env.JWT_SECRET);
        if (decoded.purpose !== 'password-reset') {
            return res.status(403).json({ message: 'Invalid token' });
        }
        Model.findByIdAndUpdate(decoded._id, { password: newPassword }, { new: true })
            .then((result) => {
                if (!result) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.status(200).json({ message: 'Password updated successfully' });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({ message: 'Error updating password' });
            });
    } catch (err) {
        console.log(err);
        res.status(403).json({ message: 'Invalid or expired reset token' });
    }
});



module.exports = router;