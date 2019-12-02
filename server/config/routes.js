// require userHandler, listHandler
var userHandler = require('../users/userHandler.js');
var listHandler = require('../lists/listHandler.js');

// export function
module.exports = function(app, express){

  /*
    POST - api/signup - api endpoint to add users into database
  */
  app.post('/api/signup', userHandler.signup);
  app.post('/api/login', userHandler.signin);
  /*
    TODO: Add routes here to create your own API endpoints
    route '/' is reserved to serve client side code
  */
};
