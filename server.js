const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const { Console } = require('console');

//let server;


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

  // const server = app.listen(PORT, () => {
  //   console.log(`Server is running on port ${PORT}`);
  
  // });
  


  // afterAll((done) => {
  //   server.close(done);
  // });
  
  

  module.exports = server;



//   const request = require('supertest');
// const app = require('../app');
// const mongoose = require('mongoose');
// const Product = require('../models/Product');

// describe('Search API', () => {
//   beforeAll(async () => {
//     // Connect to the MongoDB test database
//     await mongoose.connect('mongodb://localhost:27017/testdb', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     // Create a sample product for testing
//     const productData = {
//       name: 'Test Product',
//       description: 'This is a test product',
//       price: 10.99,
//       variants: [
//         {
//           name: 'Variant 1',
//           sku: 'V1',
//           additionalCost: 2.99,
//           stockCount: 10,
//         },
//       ],
//     };

//     await Product.create(productData);
//   });

//   afterAll(async () => {
//     // Delete all documents from the Product collection
//     await Product.deleteMany({});

//     // Disconnect from the MongoDB test database
//     await mongoose.disconnect();
//   });

//   it('should return matching products based on variants', async () => {
//     const response = await request(app)
//       .get('/search')
//       .query({ variants: 'Variant 1' });

//     expect(response.statusCode).toBe(200);
//     expect(response.body.status).toBe(true);
//     expect(response.body.message).toBe('success');
//     expect(response.body.data[0].variants[0].name).toBe('Variant 1');
//   });

//   it('should return 404 if no matching products found', async () => {
//     const response = await request(app)
//       .get('/search')
//       .query({ variants: 'Nonexistent Variant' });

//     expect(response.statusCode).toBe(404);
//     expect(response.body.status).toBe(false);
//     expect(response.body.message).toBe('No matching products found');
//   });

//   // Add more test cases as needed
// });

// module.exports = app;



