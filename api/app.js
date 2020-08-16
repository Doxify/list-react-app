require('dotenv').config();
var createError    = require('http-errors');
var express        = require('express');
var path           = require('path');
var logger         = require('morgan');
var cors           = require('cors');

// Routes
var listRouter     = require('./routes/List');
var listItemRouter = require('./routes/ListItem');

// Express App
var app            = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// configuring routes
app.use('/list', listRouter);
app.use('/item', listItemRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Database issue.
  if(res.locals.message === 'ECONNREFUSED') {
    return res.status(200).json({
      status: 'ERROR',
      message: 'Database error occurred, please try again later.'
    });
  }

  // send error
  res.status(err.status || 500);
  res.json({
    message: res.locals.error || 'Invalid route.'
  })
});

module.exports = app;
