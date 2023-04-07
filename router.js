/** 
 * Lambton College
 * CSD 3103 - Full Stack JavaScript
 * Term project
 * Hugo Beltran Escarraga - C0845680
 * Juan Luis Casanova Romero - C0851175
 */

var express = require('express');
var router = express.Router();
const Question = require('./backend/models/test.model.js');

//route for index
router.get('/index', (req, res) => {
    res.render('index');
});

//route for login
router.get('/login', (req, res) => {
    res.render('login');
});

//route for signup
router.get('/signup', (req, res) => {
    res.render('signup');
});

//route for test
router.post('/test', (req, res) => {
    res.render('test', { name: req.session.name, email: req.session.email });
});

//route for result
router.get('/result', (req, res) => {
    res.render('result', { name: req.session.name, email: req.session.email });
});

//route for setup
router.get('/setup', (req, res) => {
    if (req.session.user) {
        res.render('setup', { name: req.session.name, email: req.session.email });
    } else {
        res.send("Unauthorized user");
    }
});

//route for dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

//route for questions
router.get('/questions', async (req, res) => {
  if (req.session.role == 'admin') {
    let allRules = await Question.find({ "category": "Rules" });
    let allSigns = await Question.find({ "category": "Signs" });
    res.render('questions', {name: req.session.name, rules: allRules, signs: allSigns});
  } else {
    res.status(401).send({
      message: "Unauthorized user"
    });
  }
});

//route for logout
router.get('/logout', (req, res) => {
    req.session.destroy(function (err) {
        if (err) {
            res.send("Error");
        } else {
            res.render('index', { title: "Express", logout: "Logout successful" });
        }
    });
});

module.exports = router;