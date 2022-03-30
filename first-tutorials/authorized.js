const authorized = (request, response, next) => {
    const {user} = request.query
    if(user === 'john'){
        
    }
  console.log('Authorized!');
  next();
};

module.exports = authorized;
