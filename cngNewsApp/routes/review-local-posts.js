var express = require('express');
var router = express.Router();
var localPostDetails = require('../models/local-post'); 

// As with any middleware it is quintessential to call next()
// if the user is authenticated
var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
}

/* GET review local posts page */
router.get('/', isAuthenticated, function(req, res) {

  localPostDetails.find(function(err, localPosts) {
    if (err) return console.error(err);
    res.render('review-local-posts', {posts: localPosts});
  })
})

module.exports = router;
