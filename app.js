const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const pe = require('parse-error');
const cors = require('cors');
const v1 = require('./routes/v1');
const config = require('./config/config');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS
app.use(cors());

// routes
app.use('/v1', v1);
// just a default route
app.use('/', (req, res) => {
  res.statusCode = 200; // send the appropriate status code
  res.json({
    status: 'success',
    message: 'Todos-pro API',
    data: {},
  });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

process.on('unhandledRejection', error => {
  // eslint-disable-next-line no-console
  console.error('Uncaught Error', pe(error));
});

// eslint-disable-next-line no-console
app.listen(config.port, _ => console.log(`app listening on port ${config.port}`));
