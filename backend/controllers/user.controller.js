/*
        Lambton College
        CSD 3103 - Full Stack JavaScript
        Term project
        Hugo Beltran Escarraga - C0845680
        Juan Luis Casanova Romero - C0851175
*/

const User = require('../models/user.model.js');

// Create and Save a new User
exports.create = async (req, res) => {
  // Validate request

  if (!req.body) {
    return res.status(400).send({
      message: "User fields can not be empty"
    });
  }

  let user = await User.findOne({ "email": req.body.email });

  if (user == null) {

    // Create a User
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      role: 'user'
    });

    // Save User in the database
    user.save()
        .then(data => {
            res.render('login');
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        });
  } else {
    res.render('signup');
  }
};

// Validate user's credentials
exports.authenticate = async (req, res) => {

  let user = await User.findOne({ "email": req.body.email });

  if (user != null) {

    if (req.body.password == user.password) {
      req.session.name = user.name;
      req.session.email = user.email;
      req.session.role = user.role;
      if (user.role == 'admin') {
        res.render("dashboard", { name: user.name, email: user.email });
      } else {
        res.render('setup', { name: user.name, email: user.email });
      }

    } else {
      res.redirect('/router/login');
    }

  } else {
    res.redirect('/router/login');
  }

};

// Find a single user with a email
exports.findOne = (req, res) => {
  User.find({ "email": req.params.Email })
    .then(users => {
      res.send(users);
    });
};