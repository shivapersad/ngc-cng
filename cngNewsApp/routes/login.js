var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res) {
  if (req.user != undefined) {
    res.redirect('/homepage');
  }
  else {
    res.render('login');
  }
});

router.post('/', passport.authenticate('local', {
  successRedirect: '/homepage',
  failureRedirect: '/'
}));

passport.use(new LocalStrategy((username, password, done) => {
  process.nextTick(function() {
    User.findOne({
      'username': username,
    }, function(err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false);
      }

      if (user.password != password) {
        return done(null, false);
      }

      return done(null, user);
    });
  });
}));

module.exports = router;
