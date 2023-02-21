const express = require('express');
const router = express.Router();
const {
  getGoal,
  postGoal,
  putGoal,
  deleteGoal,
} = require('../controller/goalController.js');
const { protect } = require('../middleware/authMiddleware.js');

router.route('/').get(protect, getGoal).post(protect, postGoal);
router.route('/:id').put(protect, putGoal).delete(protect, deleteGoal);

// @desc we cleaned up at code number "11"
// router.get('/', getGoal);
// router.post('/', postGoal);

// @desc we cleaned up at code number "12"
// router.put('/:id', putGoal);
// router.delete('/:id', deleteGoal);

module.exports = router;
