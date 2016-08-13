var express = require('express');
var router = express.Router();

// As with any middleware it is quintessential to call next()
// if the user is authenticated
var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
}

/* GET home page. */
router.get('/', isAuthenticated, function(req, res) {
  console.log("Login page: " + JSON.stringify(req.session));
  res.render('homepage');
});

module.exports = router;
