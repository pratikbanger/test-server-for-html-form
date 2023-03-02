const express = require('express');
const router = express.Router();
const contactDetail = require('../models/Contact');
const { body, validationResult } = require('express-validator');

// Submiting contact us form using: POST '/api/contact/
router.post('/', [
    body('name', 'Name length should be at least 3 characters').isLength({ min: 3 }),
    body('email', 'Enter a valid email!').isEmail(),
    body('message', 'Message length should be at least 5 characters').isLength({ min: 5 }),
] ,(req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    contactDetail.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    }).then(contact => res.json(contact))
    .catch(err => console.log(err))
})

module.exports = router