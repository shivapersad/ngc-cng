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

router.get('/:id', isAuthenticated, function(req, res) {
  console.log('Redirecting to edit International Post page');
  //console.log("GET: " + JSON.stringify(req.url));
  var id = req.param('id');
  console.log("ID: " + id);

  internationalPostDetails.findOne({ '_id': id }, function(err, internationalPost) {
    if (err) return console.error(err);
    res.render('edit-international-post', {post: internationalPost});
  })
});

router.post('/edit/:id', isAuthenticated, function(req, res) {

    var id = req.param('id');
    console.log("Post ID: " + JSON.stringify(id));
    var d = new Date();

    var newData = {};
    newData.dateTimePosted = d.toString();
    newData.title = req.body.title;
    newData.url = req.body.url;
    newData.live = req.body.live;
    newData.username = JSON.stringify(req.session.passport.user.username).replace(/\"/g, "");

    internationalPostDetails.findOneAndUpdate(id, newData, {upsert:true}, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.redirect('/review-international-posts');
    });
})

module.exports = router;
