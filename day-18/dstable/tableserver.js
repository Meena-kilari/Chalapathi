const express = require('express');
const { connectDB } = require('./src/models/table.models');
const dbRoutes = require('./src/routes/table.routes');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse x-www-form-urlencoded bodies
app.use(express.urlencoded({ extended: true }));

app.use('/api', dbRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:3000`);
  });
}).catch(console.error);
