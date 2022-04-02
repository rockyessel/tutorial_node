module.exports = {
  ensureAuth: function (request, response, next) {
    if (request.isAuthenticated()) {
      return next();
      console.log(request);
    } else {
      response.redirect('/');
    }
  },
  ensureGuest: function (request, response, next) {
    if (request.isAuthenticated()) {
      response.redirect('/dashboard');
    } else {
      return next();
    }
  },
};
