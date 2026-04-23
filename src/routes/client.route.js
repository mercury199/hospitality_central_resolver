const express = require('express');
const { fetchAppStylingDetail } = require('../controllers/client.controller');

const router = express.Router();

router.get('/app-styling-detail', fetchAppStylingDetail);

module.exports = router;
