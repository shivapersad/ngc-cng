var express = require('express');
var router = express.Router();
var localPostDetails = require('../models/local-post');

/* GET local posts for JSON */
router.get('/localPosts', function(req, res, next) {
  localPostDetails.find(function (err, posts) {
    if (err) return next(err);
    res.json(posts);
  });
});

module.exports = router;