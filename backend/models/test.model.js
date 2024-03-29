/*
		Lambton College
		CSD 3103 - Full Stack JavaScript
		Term project
		Hugo Beltran Escarraga - C0845680
		Juan Luis Casanova Romero - C0851175
*/

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

const Question = mongoose.model('Question', QuestionSchema);
const Answer = mongoose.model('Answer', AnswerSchema);
module.exports = {Question: Question, Answer: Answer};