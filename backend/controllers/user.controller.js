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
    
    if (!req.body) {
        return res.status(400).send({
            message: "User fields can not be empty"
        });
    }

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
            // res.status(201).send("User successfully created");
            res.render('login');
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        });
};

// Validate user's credentials
exports.authenticate = async (req, res) => {
  
  let user = await User.findOne({ "email": req.body.email });
  console.log(user);

  if (user != null) {

    if (req.body.password == user.password) {
      req.session.user = user.email;
      if (user.role == 'admin') {
        // res.redirect('/router/dashboard');
      } else {
        //res.end("Login successful");
        res.render('dashboard');
      }

    } else {
      res.status(400).send({
        message: "Invalid username or password"
      });
      // res.redirect('/auth');
    }

  } else {   
    res.status(400).send({
      message: "Invalid username or password"
    });
    // res.redirect('/auth');
  }
  
};

// Find a single user with a email
exports.findOne = (req, res) => {
    User.find({ "email": req.params.Email })
    .then(users => {
        res.send(users);
    });
};