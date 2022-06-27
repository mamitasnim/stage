var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const myconnection=require('express-myconnection') ;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var db=require('./db/db') ;
var session=require('express-session');


var mysql = require('mysql');

app.use(myconnection(mysql,db,'pool')) ;

var bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({ extended:false })) ;
app.use(bodyparser.json()) ;


// view engine setup

app.use(session({
secret:'ABCdef' ,
resave :false,
saveUninitialized : true
}));



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));




app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes 
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



app.listen(3000) ;


module.exports = app;
