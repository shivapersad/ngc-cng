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
  //console.log("req.body: " + req.body);
  //console.log("req.body.title: " + req.body.title);

  var d = new Date();
  var post = {
    "dateTimePosted": d.toString(),
    "title": req.body.title,
    "content": req.body.content,
    "live": req.body.live,
    "username": JSON.stringify(req.session.passport.user.username).replace(/\"/g, "")
  }
  
  //console.log("Post: " + post);
  conn.collection('local_posts').insert(post);
  console.log('Saved to database');
  res.redirect('/new-local-post');

})

module.exports = router;
