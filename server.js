
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const productRoutes = require(path.join(__dirname, 'routes', 'productRoutes'));

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/products', productRoutes);
const mongoose = require('mongoose');

const MONGODB_URI ='mongodb+srv://yashrajsinh09:yashraj2727@assignment.lhpfmud.mongodb.net/group12Database';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


