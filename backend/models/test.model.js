const mongoose = require('mongoose');

const AnswerSchema = mongoose.Schema({
    text: String,
    isCorrect: Boolean
});

const QuestionSchema = mongoose.Schema({
    number: Number,
    text: String,
    category: String,
    presentation: String,
    reference: String,
    answers: [AnswerSchema],
    explanation: String
});

module.exports = mongoose.model('Question', QuestionSchema);