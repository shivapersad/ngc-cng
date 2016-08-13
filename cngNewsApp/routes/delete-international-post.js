var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var internationalPostDetails = require('../models/international-post');

var conn = mongoose.connection;

// As with any middleware it is quintessential to call next()
// if the user is authenticated
var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
}

router.get('/:id', function(req, res) {
  var id = req.param('id');

  internationalPostDetails.remove({ '_id': id }, function(err) {
    if (err) return console.error(err);
  })

  internationalPostDetails.find(function(err, internationalPosts) {
    if (err) return console.error(err);
    //console.log(localPosts);
    res.render('review-international-posts', {posts: internationalPosts});
  })
})

module.exports = router;