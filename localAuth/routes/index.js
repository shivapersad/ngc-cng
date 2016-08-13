var express = require('express');
var router = express.Router();
var passport = require('passport');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

//mongoose.connect('mongodb://shivapersad:ngccng123@ds145365.mlab.com:45365/cng_newsdb');

var conn = mongoose.connection;

// BEGIN Schema Declarations for mongoose

var Schema = mongoose.Schema;
var internationalPostSchema = new Schema({
  dateTimePosted: String,
  title: String,
  url: String,
  live: String,
  username: String
}, {
  collection: 'international_posts'
});
var internationalPostDetails = mongoose.model('international_posts', internationalPostSchema);

var Schema = mongoose.Schema;
var localPostSchema = new Schema({
  dateTimePosted: String,
  title: String,
  content: String,
  live: String,
  username: String
}, {
  collection: 'local_posts'
});
var localPostDetails = mongoose.model('local_posts', localPostSchema);

// END Schema Declarations for mongoose

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

/* Handle POST from login page */
router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/homepage',
    failureRedirect: '/'
  })
);

/* GET homepage */
router.get('/homepage', function(req, res, next) {
  res.render('homepage');
});

/* GET new local post page */
router.get('/new-local-post', function(req, res, next) {
  res.render('new-local-post');
})

/* POST new local post */

router.post('/new-local-post', function(req, res, next) {
  //console.log("req.body: " + req.body);
  //console.log("req.body.title: " + req.body.title);

  var d = new Date();
  var post = {
    "dateTimePosted": d.toString(),
    "title": req.body.title,
    "content": req.body.content,
    "live": req.body.live,
    "username": "user1"
  }
  
  //console.log("Post: " + post);
  conn.collection('local_posts').insert(post);
  console.log('Saved to database');
  res.redirect('/new-local-post');

})

/* GET edit local post page */
router.get('/edit-local-post', function(req, res, next) {
  res.render('edit-local-post');
  //console.log(res.body.postid);
})

/* GET new international post page */
router.get('/new-international-post', function(req, res, next) {
  res.render('new-international-post');
})

/* POST new international post page */

router.post('/new-international-post', function(req, res, next) {
  //console.log("req.body: " + req.body);
  //console.log("req.body.title: " + req.body.title);

  var d = new Date();
  var post = {
    "dateTimePosted": d.toString(),
    "title": req.body.title,
    "url": req.body.url,
    "live": "on",
    "username": "user1"
  }
  
  //console.log("Post: " + post);
  conn.collection('international_posts').insert(post);
  //console.log('Saved to database');
  res.redirect('/new-international-post');

})

/* GET review local posts page */
router.get('/review-local-posts', function(req, res, next) {

  localPostDetails.find(function(err, localPosts) {
    if (err) return console.error(err);
    console.log(localPosts);
    res.render('review-local-posts', {posts: localPosts});
  })
})

/* GET review international posts page */
router.get('/review-international-posts', function(req, res, next) {

  internationalPostDetails.find(function(err, internationalPosts) {
    if (err) return console.error(err);
    console.log(internationalPosts);
    res.render('review-international-posts', {posts: internationalPosts});
  });
})

/* GET local posts for JSON */
router.get('/localPosts', function(req, res, next) {
  localPostDetails.find(function (err, posts) {
    if (err) return next(err);
    res.json(posts);
  });
});

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
})


module.exports = router;
