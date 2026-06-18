const express = require('express');
const { sendOtp, validateOtp, forgotPasswordOtp } = require('../controllers/otp.controller');

const router = express.Router();

router.post('/request', sendOtp);
router.post('/verify', validateOtp);
router.post('/forgot-password-otp', forgotPasswordOtp);

module.exports = router;
