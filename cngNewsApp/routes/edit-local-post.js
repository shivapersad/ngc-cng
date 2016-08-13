var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var localPostDetails = require('../models/local-post');

var conn = mongoose.connection;

// As with any middleware it is quintessential to call next()
// if the user is authenticated
var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
}

router.get('/:id', isAuthenticated, function(req, res) {
  console.log('Redirecting to edit Local Post page');
  //console.log("GET: " + JSON.stringify(req.url));
  var id = req.param('id');
  console.log("ID: " + id);

  localPostDetails.findOne({ '_id': id }, function(err, localPost) {
    if (err) return console.error(err);
    res.render('edit-local-post', {post: localPost});
  })
});

router.post('/edit/:id', isAuthenticated, function(req, res) {

    var id = req.param('id');
    console.log("Post ID: " + JSON.stringify(id));
    var d = new Date();

    var newData = {};
    newData.dateTimePosted = d.toString();
    newData.title = req.body.title;
    newData.content = req.body.content;
    newData.live = req.body.live;
    newData.username = JSON.stringify(req.session.passport.user.username).replace(/\"/g, "");

    localPostDetails.findOneAndUpdate(id, newData, {upsert:true}, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.redirect('/review-local-posts');
    });
})

module.exports = router;
