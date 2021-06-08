let { config } = require('../config/secretData')

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${config.mongoUser}:${config.mongoPass}@cluster0.cuv4w.mongodb.net/Hippo7`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("mongo connected");
  // we're connected!
});

module.exports = db;
