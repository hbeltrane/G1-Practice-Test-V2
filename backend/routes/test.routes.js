module.exports = (app) => {
  const test = require('../controllers/test.controllers.js');

  // Create a new Note
  app.post('/questions', test.create);

  // Retrieve all Notes
  app.get('/questions', test.findAll);

  app.get('/questions/rules', test.findAllRules);

  app.get('/questions/sign', test.findAllSign);


  // Retrieve a single Note with noteId
  app.get('/questions/:qId', test.findOne);

  // Update a Note with noteId
  app.put('/questions/:qId', test.update);

  // Delete a Note with noteId
  app.delete('/questions/:qId', test.delete);
}