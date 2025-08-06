const express = require('express');
const {
    register,
    login,
    getMe,
    logout,
    googleAuth
} = require('../controllers/authController');

const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/google', googleAuth);
router.get('/logout', logout);
router.get('/me', protect, getMe);

module.exports = router;
