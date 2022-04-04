// @desc Middleware
const asyncHandler = require('express-async-handler');
// the express-async-handler, handles error
// and since we are using the async-await, we'll have to use the try and catch to find any error.
// that why will use the "express-async-handle" to handle the errors, and keep the code clean.
//

// @desc Get Goals
// @route GET/api/goals
// @access Private
const getGoal = asyncHandler(async (request, response) => {
  response.status(200).json({ text: `Get Goal` });
});

// @desc Post/Create/Set Goals
// @route POST/api/goals
// @access Private

const postGoal = asyncHandler(async (request, response) => {
  const { text } = request.body;
  console.log(text);
  if (!text || text === '') {
    throw new Error('Please all field is required');
  }
  response.status(200).json({ text: `Create/set Goal` });
});
// @desc Put/Change/Updates Goals
// @route PUT/api/goals/:id
// @access Private
const putGoal = asyncHandler(async (request, response) => {
  const { id } = request.params;
  console.log(id);
  response
    .status(200)
    .json({ text: `Updates/Change Goal ${request.params.id}` });
});

// @desc Delete/Remove Goals
// @route DELETE/api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (request, response) => {
  response.status(200).json({ text: `Delete Goal ${request.params.id}` });
});

// @desc exporting goals
module.exports = {
  getGoal,
  postGoal,
  putGoal,
  deleteGoal,
};
