import axios from 'axios';

const API_URL = 'http://localhost:4000/api/users/';


// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    window.localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}login`, userData);

  if (response.data) {
    window.localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  window.localStorage.removeItem('user');
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
