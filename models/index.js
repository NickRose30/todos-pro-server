const mongoose = require('mongoose');
const Todo = require('./todo.model');
const CONFIG = require('../config/config');

if (CONFIG.db_host !== '') {
  mongoose.Promise = global.Promise; // set mongo up to use promises
  const mongoLocation = `mongodb://${CONFIG.db_host}:${CONFIG.db_port}/${CONFIG.db_name}`;

  const mongooseParams = {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

  mongoose.connect(mongoLocation, mongooseParams).catch((_) => {
    // eslint-disable-next-line no-console
    console.error('*** Can`t Connect to Mongo Server:', mongoLocation);
  });

  const db = mongoose.connection;
  module.exports = db;
  db.once('open', () => {
    // eslint-disable-next-line no-console
    console.log(`Connected to mongo at ${mongoLocation}`);
  });
  db.on('error', (error) => {
    // eslint-disable-next-line no-console
    console.error('error', error);
  });
  // End of Mongoose Setup
} else {
  // eslint-disable-next-line no-console
  console.error('No Mongo Credentials Given');
}

module.exports = { Todo };
