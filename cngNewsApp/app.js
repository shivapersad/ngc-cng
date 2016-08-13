var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// FOLLOWING TUTORIALS
var http = require('http');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// FOLLOWING TUTORIALS

var session = require('express-session');
var User = require('./models/user'); 

var routes = require('./routes/index');
var loginRouter = require('./routes/login');
var homepageRouter = require('./routes/homepage');

var newLocalPostRouter = require('./routes/new-local-post');
var reviewLocalPostsRouter = require('./routes/review-local-posts');
var editLocalPostRouter = require('./routes/edit-local-post');
var deleteLocalPostRouter = require('./routes/delete-local-post');

var newInternationalPostRouter = require('./routes/new-international-post');
var reviewInternationalPostsRouter = require('./routes/review-international-posts');
var editInternationalPostRouter = require('./routes/edit-international-post');
var deleteInternationalPostRouter = require('./routes/delete-international-post');

var mobileRouter = require('./routes/mobile');
var logoutRouter = require('./routes/logout');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('view options', { layout: false });

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components')); 
console.log("Dir name: " + path.join(__dirname, 'views'));

//app.use(session({ secret: 'compressed'}));

app.use(session({
    secret: 'compressed',
    name: 'cookie_name',
    //store: sessionStore, // connect-mongo session store
    //proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
//app.use(app.router);

app.use('/', routes);
app.use('/login', loginRouter);
app.use('/homepage', homepageRouter);

app.use('/new-local-post', newLocalPostRouter);
app.use('/review-local-posts', reviewLocalPostsRouter);
app.use('/edit-local-post', editLocalPostRouter);
app.use('/delete-local-post', deleteLocalPostRouter);

app.use('/new-international-post', newInternationalPostRouter);
app.use('/review-international-posts', reviewInternationalPostsRouter);
app.use('/edit-international-post', editInternationalPostRouter);
app.use('/delete-international-post', deleteInternationalPostRouter);

app.use('/mobile', mobileRouter);
app.use('/logout', logoutRouter);

// passport configuration
/*
var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
*/

passport.serializeUser(function(user, done) {
  var sessionUser = { _id: user._id, username: user.username }; 
  done(null, sessionUser);
});

passport.deserializeUser(function(sessionUser, done) {
  User.findById(sessionUser._id, function(err, user) {
    done(err, user);
  });
});

// mongoose
mongoose.connect('mongodb://shivapersad:ngccng123@ds145365.mlab.com:45365/cng_newsdb', function(err) {
  if (err) {
    console.log('Could not connect to MongoDB');
  }
});

var conn = mongoose.connection;

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
