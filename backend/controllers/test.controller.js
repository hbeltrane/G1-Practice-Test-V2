/*
        Lambton College
        CSD 3103 - Full Stack JavaScript
        Term project
        Hugo Beltran Escarraga - C0845680
        Juan Luis Casanova Romero - C0851175
*/

const { Question } = require('../models/test.model.js');
const { Answer } = require('../models/test.model.js');

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
exports.create = async (req, res) => {
    let ques = req.body.question;
    let num = await Question.find().sort({ number: -1 }).limit(1);
    let pres = req.body.category == "Rules" ? "text" : "image";
    let ref = "";
    let ans = [];
    if (req.body.category == "Signs") {
        ques = "What does this sign mean?";
        ref = "/images/" + req.files[0].originalname;
    };
    const ans0 = new Answer({
        text: req.body.answer0,
        isCorrect: "true"
    });
    ans.push(ans0);
    const ans1 = new Answer({
        text: req.body.answer1,
        isCorrect: "false"
    });
    ans.push(ans1);
    const ans2 = new Answer({
        text: req.body.answer2,
        isCorrect: "false"
    });
    ans.push(ans2);
    const ans3 = new Answer({
        text: req.body.answer3,
        isCorrect: "false"
    });
    ans.push(ans3);
    // Create a Question
    const question = new Question({
        number: num[0].number + 1,
        text: ques,
        category: req.body.category,
        presentation: pres,
        reference: ref,
        answers: ans,
        explanation: req.body.explanation
    });

    // Save Question in the database
    question.save()
        .then(data => {

            res.render("dashboard", { name: req.session.name });
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
    let num = Number(req.params.num)
    Question.findOne({ number: num })
        .then(question => {
            if (!question) {
                return res.status(404).send({
                    message: "Question not found with id " + req.params.num
                });
            }
            res.send(question);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Question not found with num " + req.params.num
                });
            }
            return res.status(500).send({
                message: "Error retrieving question with num " + req.params.num
            });
        });
};

// Delete a question with the specified num in the request
exports.delete = (req, res) => {
    let num = Number(req.params.num)
    Question.findOneAndRemove({ number: num })
        .then(question => {
            if (!question) {
                return res.status(404).send({
                    message: "Question not found with num " + req.params.num
                });
            }
            res.send({ message: "Question deleted successfully!" });
            // res.render("dashboard", { 
            //   name: req.session.name,  
            //   message: "Question deleted successfully!"
            // });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Question not found with num " + req.params.num
                });
            }
            return res.status(500).send({
                message: "Could not delete question with num " + req.params.num
            });
        });
};
