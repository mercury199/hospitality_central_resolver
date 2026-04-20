
const express = require('express');
////console.log(process.env);
const path = require('path');



const router = express.Router();router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});
