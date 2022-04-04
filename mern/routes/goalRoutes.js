const express = require('express');
const router = express.Router();
const {
  getGoal,
  postGoal,
  putGoal,
  deleteGoal,
} = require('../controller/goalController.js');

router.route('/').get(getGoal).post(postGoal);
router.route('/:id').put(putGoal).delete(deleteGoal);

// @desc we cleaned up at code number "10"
// router.get('/', getGoal);
// router.post('/', postGoal);

// router.put('/:id', putGoal);
// router.delete('/:id', deleteGoal);

module.exports = router;
