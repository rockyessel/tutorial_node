import axios from 'axios';

const API_URL = 'http://localhost:4000/api/goal/';

// Create Goal
const create = async (goalData) => {
  const response = await axios.post(API_URL, goalData);

  //   if (response.data) {
  //     window.localStorage.setItem('user', JSON.stringify(response.data));
  //   }

  return response.data;
};

const goalService = {
  create,
};

export default goalService;
