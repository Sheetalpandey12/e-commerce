const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');
const Product = require('../models/Product');
const productController = require('../controllers/productController');
const server = require('../server');



 
describe('Product API', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
    server.close();
  });

  beforeEach(async () => {
    await Product.deleteMany();
  });

  it('should create a new product', async () => {
    const productData = {
      name: 'Product 1',
      description: 'Product 1 description',
      price: 10,
      variants: [
        {
          name: 'Variant 1',
          sku: 'SKU001',
          additionalCost: 5,
          stockCount: 10,
        },
      ],
    }; 

    const response = await request(app)
      .post('/create').send(productData).expect(201);

    const createdProduct = await Product.findById(response.body._id);
    expect(createdProduct).toBeTruthy();
    expect(createdProduct.name).toBe(productData.name);
    expect(createdProduct.description).toBe(productData.description);
    expect(createdProduct.price).toBe(productData.price);
    expect(createdProduct.variants.length).toBe(1);
    expect(createdProduct.variants[0].name).toBe(productData.variants[0].name);
  });


});
