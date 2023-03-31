const Question = require('../models/test.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Validate topic
    if( req.body.topic != "business" &&
        req.body.topic != "family" &&
        req.body.topic != "entertainment") {
        return res.status(400).send({
            message: "No topic can't be empty and must be one of this: business, family, entertainment."
        });
    }

    // Create a Note
    const question = new Question({
        title: req.body.title || "Untitled Note", 
        content: req.body.content,
        topic: req.body.topic
    });

    // Save Note in the database
    question.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
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

// Retrieve and return all questions of rules category.
exports.findAllRules = (req, res) => {
    Question.find({ "category": "rules" })
    .then(questions => {
        res.send(questions);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving questions."
        });
    });
};

// Retrieve and return all questions of signs category.
exports.findAllSign = (req, res) => {
    Question.find({ "category": "sign" })
    .then(questions => {
        res.send(questions);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving questions."
        });
    });
};

// Find a single question with a qId
exports.findOne = (req, res) => {
    Question.findById(req.params.qId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.qId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.qId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.qId
        });
    });
  };

// Update a note identified by the qId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    Question.findByIdAndUpdate(req.params.qId, {
        title: req.body.title || "Untitled Note",
        content: req.body.content
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.qId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.qId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.qId
        });
    });
};

// Delete a note with the specified qId in the request
exports.delete = (req, res) => {
    Question.findByIdAndRemove(req.params.qId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.qId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.qId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.qId
        });
    });
};