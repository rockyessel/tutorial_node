const express = require('express');
const router = express.Router();
const { paymentAdd } = require('../controllers/payment.js');

router.post('/add', paymentAdd);

module.exports = router;
