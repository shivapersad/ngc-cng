var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Redirecting to login');
  res.redirect('/login');
});

module.exports = router;
