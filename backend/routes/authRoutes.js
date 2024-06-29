const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('../helper/passport');
const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { email, pass } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(pass, 10);
        const user = new User({ username: email, password: hashedPassword });
        await user.save();
        res.status(201).send({status: 1, message: 'User registered'});
    } catch (err) {
        res.status(500).send({status: -1, message: `Error registering user ${err}`});
    }
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            // Unexpected error
            return next(err);
        }
        if (!user) {
            // Authentication failure
            return res.status(401).send(info);
        }
        req.logIn(user, (err) => {
            if (err) {
                // Login error
                return next(err);
            }
            // Successful login
            req.session.user = user;
            return res.send({status: 1, message: "Logged In"});
        });
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logout(err => {
        if (err) { return next(err); }
        res.send('Logged out');
    });
});

router.get('/user', (req, res) => {
    if (req.isAuthenticated()) {
        res.send({status: 1, message: req.user.username});
    } else {
        res.status(401).send({status: -1, message: 'Not authenticated'});
    }
});

module.exports = router;