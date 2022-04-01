const { response } = require('express');
const express = require('express');
const router = express.Router();

// @desc Login/Landing Page
// @router GET /

router.get('/', (request, response) => {
  response.render('login', {
    layout: 'login',
  });
});

// @desc Dashboard
// @router GET /

router.get('/dashboard', (request, response) => {
  response.render('dashboard');
});

// Exports
module.exports = router;
