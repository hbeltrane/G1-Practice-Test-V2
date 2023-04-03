/*
        Lambton College
        CSD 3103 - Full Stack JavaScript
        Term project
        Hugo Beltran Escarraga - C0845680
        Juan Luis Casanova Romero - C0851175
*/

var express = require('express');
var router = express.Router();
var loggeduser;

/*
const credential = {
    email: "admin@ferrari.com",
    password: "enzo"
}
*/
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
    res.render('test');
});

//route for result
router.get('/result', (req, res) => {
    res.render('result');
});

// login user
router.post('/login', async (req, res) => {
    // Sign up
    if (req.body.password2 != null) {
        req.session.user = req.body.email;
        res.redirect('/router/dashboard');
    // Log in
    } else {
        let requestUser = await fetch('http://localhost:3000/users/' + req.body.email);
        loggeduser = requestUser.json();
        console.log(loggeduser.name);
        if (req.body.email == loggeduser.email && req.body.password == loggeduser.password) {
            req.session.user = loggeduser.email;
            res.redirect('/router/dashboard');
            //res.end("Login successful");
        } else {
            res.end("Invalid username or password");
        }
    }
});

//route for dashboard
router.get('/dashboard', (req, res) => {/*
    if (req.session.user) {*/
        res.render('dashboard', { user: req.session.user });/*
    } else {
        res.send("Unauthorized user");
    }*/
});

//route for logout
router.get('/logout', (req, res) => {
    req.session.destroy(function (err) {
        if (err) {
            consoler.log(err);
            res.send("Error");
        } else {
            res.render('base', { title: "Express", logout: "Logout successful" });
        }
    });
})

module.exports = router;