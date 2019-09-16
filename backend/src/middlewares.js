const express = require('express');
let path = require('path');
let logger = require('morgan');
let bodyParser = require('body-parser');
let cors = require('cors');
const { port } = require('./barrier')

let user = require('./routes/user')
let product = require('./routes/product')
let middlewares = express();

middlewares.use(logger('dev'));
middlewares.use(bodyParser.json());
middlewares.use(bodyParser.urlencoded({'extended':'false'}));
middlewares.use(express.static(path.join(__dirname, 'dist')));
middlewares.use(cors());
middlewares.use('/users', express.static(path.join(__dirname, 'dist')));
middlewares.use('/user', user);
middlewares.use('/product', product);

// catch 404 and forward to error handler
middlewares.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
middlewares.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.middlewares.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


let mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/freemarketDB')
.then(() =>  console.log(`connection succesful ${port}`))
.catch((err) => console.error(err));

middlewares.set('view engine', 'html');

module.exports = middlewares;