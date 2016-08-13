var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var routes = require('./routes/index');
var users = require('./routes/users');

//const MongoClient = require('mongodb').MongoClient;
var db; 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://shivapersad:ngccng123@ds145365.mlab.com:45365/cng_newsdb');

var conn = mongoose.connection;

var Schema = mongoose.Schema;
var User = new Schema({
  username: String,
  password: String
}, {
  collection: 'users'
});
var userDetails = mongoose.model('users', User);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));

app.set('views', './views');

app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.use(passport.initialize());
app.use(passport.session());

//var homepageRouter = require('./routes/homepageRoutes');
var localPosts = require('./routes/localPosts.js');

app.use('/', routes);
app.use('/homepage', routes);
app.use('/new-local-post', routes);
app.use('/new-international-post', routes);
app.use('/review-posts', routes);
//app.use('/localPosts', localPosts);

app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/homepage',
    failureRedirect: '/'
  })
);

app.get('/loginFailure', (req,res, next) => {
  res.send('Failed to authenticate');
});

app.get('/loginSuccess', (req, res, next) => {
  res.send('Successfully authenticated');
})

// passport code

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(new LocalStrategy((username, password, done) => {
  process.nextTick(function() {
    userDetails.findOne({
      'username': username,
    }, function(err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false);
      }

      if (user.password != password) {
        return done(null, false);
      }

      return done(null, user);
    });
  });
}));

// Log the client IP on every request
app.use(function (req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('Client IP:', ip);
  next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
