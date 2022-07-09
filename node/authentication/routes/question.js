const express = require('express');
const router = express.Router();

const {
  getAllQuestions,
  createAQuestion,
} = require('../controllers/question.js');

router.route('/').get(getAllQuestions).post(createAQuestion);

module.exports = router;
