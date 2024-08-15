const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./table/db.table.js');
const departmentRoutes = require('./src/routes/db.routes');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.pluralize(null);
mongoose.connect(dbConfig.url, {
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database.', err);
  process.exit();
});

app.get('/', (req, res) => {
  res.json({"message": "Welcome to the Department-User API"});
});

app.use('/api', departmentRoutes);

app.listen(5000, () => {
  console.log(`Node server is listening on port 4000`);
});
