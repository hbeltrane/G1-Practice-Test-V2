/*
		Lambton College
		CSD 3103 - Full Stack JavaScript
		Term project
		Hugo Beltran Escarraga - C0845680
		Juan Luis Casanova Romero - C0851175
*/

module.exports = (app) => {
    const user = require('../controllers/user.controller.js');
  
    // Create a new user
    app.post('/users', user.create);

    // Login a new user
    app.post('/auth', user.authenticate);
    
    // Retrieve user
    app.get('/users/:Email', user.findOne);
  }