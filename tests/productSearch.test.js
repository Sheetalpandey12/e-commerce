// const request = require('supertest');
// const app = require('../server');
// const mongoose = require('mongoose');
// const Product = require('../models/Product');
// const server = require('../server');

// describe('Search API', () => {
//   // Connect to the test database before running the tests
//   beforeAll(async () => {
//     await mongoose.connect('mongodb://localhost:27017/test', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//   });
 
//   // Clear the test database after running the tests
//   afterAll(async () => {
//     await Product.deleteMany();
//     await mongoose.connection.close();
//   });

//   describe('GET /search', () => {
//     it('should return matching products based on variants', async () => {
//       // Create a test product with matching variant
//       const testProduct = new Product({
//         name: 'Test Product',
//         description: 'Test description',
//         price: 100, // Add the price field
//         variants: [
//           {
//             name: 'Variant 1',
//             sku: '12345',
//             additionalCost: 10,
//             stockCount: 5,
//           },
//         ],
//       });
//       await testProduct.save();













//       describe('Search API', () => {
//         it('should return matching products based on variants', async () => {
//           const response = await request(app)
//             .get('/search')
//             .query({ variants: 'Variant 1' });
      
//           expect(response.statusCode).toBe(200);
//           expect(response.body.status).toBe(true);
//           expect(response.body.message).toBe('success');
//           expect(response.body.data[0].variants[0].name).toBe('Variant 1');
//         });
      
//         it('should return 404 if no matching products found', async () => {
//           const response = await request(app)
//             .get('/search')
//             .query({ variants: 'Nonexistent Variant' });
      
//           expect(response.statusCode).toBe(404);
//           expect(response.body.status).toBe(false);
//           expect(response.body.message).toBe('No matching products found');
//         });
      
//         // Add more test cases as needed
//       });}
      
  
//     //   it('should return matching products based on variants', async () => {
//     //     const response = await request(app)
//     //       .get('/search')
//     //       .query({ variants: 'Variant 1' });
      
//     //     expect(response.statusCode).toBe(200); // Update the expected status code to 200
//     //     expect(response.body.status).toBe(true);
//     //     expect(response.body.message).toBe('success');
//     //     expect(response.body.data[0].variants[0].name).toBe('Variant 1');
//     //   });
      


//     //   // Perform the search API request
//     //   const response = await request(app)
//     //     .get('/search')
//     //     .query({ variants: 'Variant 1' });

//     //   // Assert the response
//     //   expect(response.statusCode).toBe(200);
//     //   expect(response.body.status).toBe(true);
//     //   expect(response.body.message).toBe('success');
//     //   expect(response.body.data[0].variants[0].name).toBe('Variant 1');
//     //   expect(response.body.data[0].name).toBe('Test Product');
//     // });

// //     it('should return 404 if no matching products found', async () => {
// //       // Perform the search API request
// //       const response = await request(app)
// //         .get('/search')
// //         .query({ name: 'Non-existent Product' });

// //       // Assert the response
// //       expect(response.statusCode).toBe(404);
// // expect(response.body.status).toBe(false);
// // expect(response.body.message).toBe('No matching products found');

// //     });

//     // Add more test cases as needed
//   });
// })

const request = require('supertest');
const app = require('../server');
const server = require('../server');
//const app = require('../app');
const mongoose = require('mongoose');
const Product = require('../models/Product');
const productController = require('../controllers/productController');


describe('Search API', () => {
  beforeAll(async () => {
    // Connect to the MongoDB test database
    await mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Create a sample product for testing
    const productData = {
      name: 'Test Product',
      description: 'This is a test product',
      price: 10.99,
      variants: [
        {
          name: 'Variant 1',
          sku: 'SKU001',
          additionalCost: 2.99,
          stockCount: 10,
        },
      ],
    };

    await Product.create(productData);
  });

  afterAll(async () => {
    // Delete all documents from the Product collection
    await Product.deleteMany({});

    // Disconnect from the MongoDB test database
    await mongoose.disconnect();
  });

  it('should return matching products based on variants', async () => {
    const response = await request(app)
      .get('/search')
      .query({ variants: 'Variant 1' });

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe(true);
    expect(response.body.message).toBe('success');
    expect(response.body.data[0].variants[0].name).toBe('Variant 1');
  });

  it('should return 404 if no matching products found', async () => {
    const response = await request(app)
      .get('/search')
      .query({ variants: 'Nonexistent Variant' });

    expect(response.statusCode).toBe(404);
    expect(response.body.status).toBe(false);
    expect(response.body.message).toBe('No matching products found');
  });

  // Add more test cases as needed
});

//module.exports = app;

