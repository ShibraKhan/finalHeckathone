
const express = require('express');
const router = express.Router();
// now define routes on `router`, e.g. router.post('/login', loginUser);


const { register, login } = require('../controllers/authController');


// Register
router.post('/register', register);

// Login
router.post('/login', login);

module.exports = router;
