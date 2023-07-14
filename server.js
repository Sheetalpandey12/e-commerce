
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const { Console } = require('console');

const productRoutes = require(path.join(__dirname, 'routes', 'productRoutes'));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/', productRoutes);

const MONGODB_URI ='mongodb://localhost:27017/test';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('connected to mongoDB')
  });
  
  module.exports = server;


