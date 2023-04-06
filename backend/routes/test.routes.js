/*
		Lambton College
		CSD 3103 - Full Stack JavaScript
		Term project
		Hugo Beltran Escarraga - C0845680
		Juan Luis Casanova Romero - C0851175
*/

module.exports = (app) => {
  const test = require('../controllers/test.controller.js');

  app.get('/questions/rules', test.findAllRules);

  app.get('/questions/signs', test.findAllSigns);

  // Create a new question
  app.post('/questions', test.create);
  
  // Retrieve all question
  app.get('/questions', test.findAll);

  // Retrieve a single question by Id
  app.get('/questions/:qId', test.findOne);

  // Delete a question by Id
  app.delete('/questions/:qId', test.delete);
}