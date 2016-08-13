var express = require('express');
var router = express.Router();
var internationalPostDetails = require('../models/international-post');

// As with any middleware it is quintessential to call next()
// if the user is authenticated
var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
}

/* GET review international posts page */
router.get('/', isAuthenticated, function(req, res) {

  internationalPostDetails.find(function(err, internationalPosts) {
    if (err) return console.error(err);
    //console.log(internationalPosts);
    res.render('review-international-posts', {posts: internationalPosts});
  });
})

module.exports = router;
