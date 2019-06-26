const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// User model
const User = require('../models/User');


// Login page
router.get('/login', (req, res) => res.render('login'));

// Register page
router.get('/register', (req, res) => res.render('register'));

// Register handle
router.post('./register', (req, res) => {
    const { name, email, passowrd, password2 } = req.body;
    let errors = [];

    // Check required fields
    if (!name || !email || !passowrd || !password2) {
        errors.push({ msg: 'Please fill out all fields.' });
    }

    // Check passwords match
    if (password !== password2) {
        errors.push({ msg: 'Passwords do not match.' });
    }

    // Checking password length
    if (password.length < 6) {
        errors.push({ msg: 'Password should be at least six characters long.' });
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        // Validation passed
        User.finOne({ email: email })
            .then(user => {
                if (user) {
                    // User exists
                    errors.push({ msg: 'Email already registered' });
                    res.render('register', {
                        errors,
                        name,
                        email,
                        password,
                        password2
                    });
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password
                    });
                    // Hash Password
                    bcrypt.genSalt(10, (err, salt) =>
                        bcrypt.hash(newUser.password, salt, (err, salt) => {
                            if (err) throw err;
                            // Set password to hashed
                            newUser.password = hash;
                            //Save user
                            newUser.save()
                                .then(user => {
                                    res.flash('success_msg', 'You are now registered and can now log in.');
                                    res.redirect('/users/login');
                                })
                                .catch(err => console.log(err));
                        }))
                }
            });
    }


});

// Login handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

// Logout handle
router.get('logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You have logged out.');
    res.redirect('/users/login');
})


module.exports = router;