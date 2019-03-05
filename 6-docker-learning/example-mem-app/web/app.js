var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var redis = require('redis');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// let cache = {}


let redisClient = redis.createClient(6379, "redis")


app.use('/save/:key', (req, res) => {
  let key = req.params.key;
  let value = req.body.value;
  //cache[key] = value
  redisClient.set(key, value, (err) => {
    res.json({ value })
  });
})
app.use('/load/:key', (req, res) => {
  let key = req.params.key;
  // res.json({ value: cache[key] })
  redisClient.get(key, (err, value) => {
    res.json({ value })
  });
})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
