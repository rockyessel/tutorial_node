const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth.js');

// @desc Login/Landing Page
// @router GET /

router.get('/', ensureGuest, (request, response) => {
  response.render('login', {
    layout: 'login',
  });
});

// @desc Dashboard
// @router GET /

router.get('/dashboard', ensureAuth, (request, response) => {
  response.render('dashboard');
});

// Exports
module.exports = router;
