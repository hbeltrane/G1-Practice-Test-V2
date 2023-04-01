/*
		Lambton College
		CSD 3103 - Full Stack JavaScript
		Term project
		Hugo Beltran Escarraga - C0845680
		Juan Luis Casanova Romero - C0851175
*/

const Question = require('../models/test.model.js');

// Retrieve and return all questions of rules category.
exports.findAllRules = (req, res) => {
    Question.find({ "category": "Rules" })
    .then(questions => {
        res.send(questions);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving questions."
        });
    });
};

// Retrieve and return all questions of signs category.
exports.findAllSigns = (req, res) => {
    Question.find({ "category": "Signs" })
    .then(questions => {
        res.send(questions);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving questions."
        });
    });
};

// Create and Save a new Question
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Question content can not be empty"
        });
    }

    // Create a Question
    const question = new Question({
        title: req.body.title || "Untitled Question", 
        content: req.body.content,
        topic: req.body.topic
    });

    // Save Question in the database
    question.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Question."
        });
    });
};

// Retrieve and return all questions from the database.
exports.findAll = (req, res) => {
    Question.find()
    .then(questions => {
        res.send(questions);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving questions."
        });
    });
};

// Find a single question with a num
exports.findOne = (req, res) => {
    Question.findById(req.params.num)
    .then(question => {
        if(!question) {
            return res.status(404).send({
                message: "Question not found with id " + req.params.num
            });            
        }
        res.send(question);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Question not found with id " + req.params.num
            });                
        }
        return res.status(500).send({
            message: "Error retrieving question with id " + req.params.num
        });
    });
  };

// Update a question identified by the num in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Question content can not be empty"
        });
    }

    // Find question and update it with the request body
    Question.findByIdAndUpdate(req.params.num, {
        title: req.body.title || "Untitled Question",
        content: req.body.content
    }, {new: true})
    .then(question => {
        if(!question) {
            return res.status(404).send({
                message: "Question not found with id " + req.params.num
            });
        }
        res.send(question);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Question not found with id " + req.params.num
            });                
        }
        return res.status(500).send({
            message: "Error updating question with id " + req.params.num
        });
    });
};

// Delete a question with the specified num in the request
exports.delete = (req, res) => {
    Question.findByIdAndRemove(req.params.num)
    .then(question => {
        if(!question) {
            return res.status(404).send({
                message: "Question not found with id " + req.params.num
            });
        }
        res.send({message: "Question deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Question not found with id " + req.params.num
            });                
        }
        return res.status(500).send({
            message: "Could not delete question with id " + req.params.num
        });
    });
};