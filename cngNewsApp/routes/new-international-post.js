var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var conn = mongoose.connection;

// As with any middleware it is quintessential to call next()
// if the user is authenticated
var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
}

router.get('/', isAuthenticated, function(req, res) {
  console.log('Redirecting to new International Post page');
  res.render('new-international-post');
});

/* POST new international post page */

router.post('/', isAuthenticated, function(req, res, next) {
  //console.log("req.body: " + req.body);
  //console.log("req.body.title: " + req.body.title);

  if (req.body.live == null) {
    live = "off";
  }
  else {
    live = "on";
  }

  var post = {
    "dateTimePosted": Date.now(),
    "title": req.body.title,
    "url": req.body.url,
    "live": live,
    "username": JSON.stringify(req.session.passport.user.username).replace(/\"/g, "")
  }
  
  //console.log("Post: " + post);
  conn.collection('international_posts').insert(post);
  console.log('Saved to database');
  res.redirect('/new-international-post');

})

module.exports = router;
