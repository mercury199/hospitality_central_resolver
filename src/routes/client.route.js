const express = require('express');
const {
  fetchAppStylingDetail,
  addClientConfig,
  fetchAppStylingDetailV2,
} = require('../controllers/client.controller');

const router = express.Router();

router.get('/app-styling-detail', fetchAppStylingDetail);
router.get('/app-styling-detail-v2', fetchAppStylingDetailV2);
router.post('/client-config', addClientConfig);

module.exports = router;
