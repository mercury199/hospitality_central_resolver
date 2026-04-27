const express = require('express');
const { fetchAppStylingDetail, addClientConfig } = require('../controllers/client.controller');

const router = express.Router();

router.get('/app-styling-detail', fetchAppStylingDetail);
router.post('/client-config', addClientConfig);

module.exports = router;
