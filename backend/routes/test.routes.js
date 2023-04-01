/*
		Lambton College
		CSD 3103 - Full Stack JavaScript
		Term project
		Hugo Beltran Escarraga - C0845680
		Juan Luis Casanova Romero - C0851175
*/

module.exports = (app) => {
  const test = require('../controllers/test.controllers.js');

  app.get('/questions/rules', test.findAllRules);

  app.get('/questions/signs', test.findAllSigns);

  // Create a new Note
  app.post('/questions', test.create);
  
  // Retrieve all Notes
  app.get('/questions', test.findAll);

  // Retrieve a single Note with noteId
  app.get('/questions/:qId', test.findOne);

  // Update a Note with noteId
  app.put('/questions/:qId', test.update);

  // Delete a Note with noteId
  app.delete('/questions/:qId', test.delete);
}