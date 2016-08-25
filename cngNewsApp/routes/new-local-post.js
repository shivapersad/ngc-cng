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
  console.log('Redirecting to new Local Post page');
  console.log("Request: " + JSON.stringify(req.session));
  console.log("Username: " + JSON.stringify(req.session.passport.user.username));
  res.render('new-local-post');
});

/* POST new local post */

router.post('/', isAuthenticated, function(req, res) {

  if (req.body.live == null) {
    live = "off";
  }
  else {
    live = "on";
  }

  var post = {
    "dateTimePosted": Date.now(),
    "title": req.body.title,
    "content": req.body.content,
    "live": live,
    "username": JSON.stringify(req.session.passport.user.username).replace(/\"/g, "")
  }
  
  conn.collection('local_posts').insert(post);
  console.log('Saved to database');
  res.redirect('/new-local-post');

})

module.exports = router;
