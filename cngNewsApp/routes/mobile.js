var express = require('express');
var router = express.Router();
var localPostDetails = require('../models/local-post');
var internationalPostDetails = require('../models/international-post');

/* GET local posts for JSON */
router.get('/localPosts', function(req, res, next) {
  localPostDetails.find(function (err, localPosts) {
    if (err) return next(err);
    res.json(localPosts);
  });
});

/* GET local posts for JSON */
router.get('/internationalPosts', function(req, res, next) {
  internationalPostDetails.find(function (err, internationalPosts) {
    if (err) return next(err);
    res.json(internationalPosts);
  });
});

module.exports = router;