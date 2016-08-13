var express = require('express');
var homepageRouter = express.Router();

var router = function () {

    homepageRouter.get('/homepage', function(req, res) {
        res.render('homepage');
    });

    return homepageRouter;
}

module.exports = router;