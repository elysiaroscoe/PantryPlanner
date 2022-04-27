const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//CREATE NEW USER
router.post('/register', async (req, res) => {
    //form is validated on schema
    //search for email
    const previousAccount = await User.findOne({ email: req.body.email });
    if (previousAccount) return res.status(400).send('Email already registered to an account')

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const savedUser = await user.save();
        res.send({ _id: savedUser._id });
    } catch (err) {
        res.status(400).send(err);
    }
});

//LOGIN USER
router.post('/login', async (req, res) => {
    //check if the email is in database
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email or password is wrong');

    //compare passwords
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Email or password is wrong');

    //produce jwt token for logged in user
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});

module.exports = router;