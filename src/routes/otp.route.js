const express = require('express');
const { sendOtp, validateOtp } = require('../controllers/otp.controller');

const router = express.Router();

router.post('/request', sendOtp);
router.post('/verify', validateOtp);

module.exports = router;
