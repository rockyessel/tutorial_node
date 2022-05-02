// @desc Middleware
const asyncHandler = require('express-async-handler');
// the express-async-handler, handles error
// and since we are using the async-await, we'll have to use the try and catch to find any error.
// that why will use the "express-async-handle" to handle the errors, and keep the code clean.

const Goal = require('../models/goalModel.js');
const User = require('../models/userModel');

// @desc Get Goals
// @route GET/api/goals
// @access Private
const getGoal = asyncHandler(async (request, response) => {
  const goals = await Goal.find({ user: request.user.id });

  response.status(200).json(goals);
});

// @desc Post/Create/Set Goals
// @route POST/api/goals
// @access Private
const postGoal = asyncHandler(async (request, response) => {
  const { text } = request.body;

  if (!text || text === '' || text.trim().length <= 0) {
    throw new Error('Please, all field is required');
  }

  console.log(text);

  const goal = await Goal.create({
    text: text,
    user: request.user.id,
  });

  response.status(200).json(goal);
});

// @desc Put/Change/Updates Goals
// @route PUT/api/goals/:id
// @access Private
const putGoal = asyncHandler(async (request, response) => {
  const { id } = request.params;

  const goal = await Goal.findById(id);
  const user = await User.findById(request.user.id);

  console.log(id);

  console.log(request.body);

  if (!goal) {
    response.status(401);
    throw new Error('Goal not found');
  }

  if (!user) {
    response.status(401);
    throw new Error('User not found');
  }

  console.log('the goal user:', goal.user.toString());
  console.log('user:', user.id);

  if (goal.user.toString() !== user.id) {
    response.status(401);
    throw new Error('User not authorized');
  }

  const updated = await Goal.findByIdAndUpdate(id, request.body, { new: true });

  response.status(200).json(updated);
});

// @desc Delete/Remove Goals
// @route DELETE/api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (request, response) => {
  const { id } = request.params;

  if (!id || id === '') {
    response.status(400);
    throw new Error('Goal not found');
  }

  const goal = await Goal.findById(id);
  const user = await User.findById(request.user.id);

  if (!user) {
    response.status(401);
    throw new Error('User not found');
  }

  if (goal.user.toString() !== user.id) {
    response.status(401);
    throw new Error('User not authorized');
  }

  await goal.remove();

  response.status(200).json({
    id: id,
    msg: `Goal deleted successfully`,
  });
});

// @desc exporting goals
module.exports = {
  getGoal,
  postGoal,
  putGoal,
  deleteGoal,
};
