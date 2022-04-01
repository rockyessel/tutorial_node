const express = require('express');
const passport = require('passport');
const router = express.Router();

// @desc Auth with Google
// @router GET /auth/google

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// @desc Google auth callback
// @router GET /auth/google/callback

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (request, response) => {
    response.redirect('/dashboard');
  }
);

// @desc Logout user
// @router /auth/logout
router.get('/logout', (request, response) => {
  request.logout();
  response.redirect('/');
  console.log(request);
  console.log(response);
});

// Exports
module.exports = router;
