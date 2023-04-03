/*
        Lambton College
        CSD 3103 - Full Stack JavaScript
        Term project
        Hugo Beltran Escarraga - C0845680
        Juan Luis Casanova Romero - C0851175
*/

const User = require('../models/user.model.js');

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    /*
    if (!req.body.content) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }*/

    // Create a User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    });

    // Save User in the database
    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        });
};

// Find a single user with a num
exports.findOne = (req, res) => {
    User.find({ "email": req.params.Email })
    .then(users => {
        res.send(users);
    });
};