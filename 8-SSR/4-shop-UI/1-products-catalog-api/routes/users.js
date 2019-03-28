var express = require('express');
var router = express.Router();
var User = require('../model/User')
const passport = require('passport');
const bcrypt = require('bcryptjs')


router.get('/register', function (req, res, next) {
  res.render('users/register-form');
});

router.get('/login', function (req, res, next) {
  res.render('users/login-form');
});


router.post('/login', function (req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(400).json(err)
    else if (user) return res.status(200).json({ "token": user.generateJwt() })
    else return res.status(404).json(info);
  })(req, res, next);
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect("/")
})

router.post('/register', function (req, res, next) {
  let form = req.body;
  const saltRounds = 10;
  const myPlaintextPassword = form.password;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
      var newUser = new User(form);
      newUser.password = hash;
      newUser.save()
        .then(() => {
          // req.flash('success_msg', 'you have registred');
          res.redirect('/users/login')
        })
    });
  });
});



module.exports = router;