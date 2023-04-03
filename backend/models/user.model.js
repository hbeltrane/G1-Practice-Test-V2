/*
		Lambton College
		CSD 3103 - Full Stack JavaScript
		Term project
		Hugo Beltran Escarraga - C0845680
		Juan Luis Casanova Romero - C0851175
*/

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);