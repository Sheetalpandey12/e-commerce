const mongoose = require('mongoose');
const Product = require('../models/Product'); 


describe('Product Model', () => {
  beforeAll(async () => {
    // Connect to the MongoDB test database
    await mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    // Disconnect from the MongoDB test database
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    // Clear the product collection before each test
    await Product.deleteMany({});
  });

  test('should save a new product to the database', async () => {
    const productData = {
      name: 'Test Product',
      description: 'This is a test product',
      price: 10.99,
      variants: [
        {
          name: 'Variant 1',
          sku: '12345',
          additionalCost: 2.99,
          stockCount: 10,
        },
        {
          name: 'Variant 2',
          sku: '67890',
          additionalCost: 0,
          stockCount: 5,
        },
      ],
    };

    const product = new Product(productData);
    const savedProduct = await product.save();

    expect(savedProduct._id).toBeDefined();
    expect(savedProduct.name).toBe(productData.name);
    expect(savedProduct.description).toBe(productData.description);
    expect(savedProduct.price).toBe(productData.price);
    expect(savedProduct.variants).toHaveLength(productData.variants.length);
  });

  test('should retrieve all products from the database', async () => {
    const productData = [
      {
        name: 'Product 1',
        description: 'This is product 1',
        price: 19.99,
        variants: [],
      },
      {
        name: 'Product 2',
        description: 'This is product 2',
        price: 29.99,
        variants: [],
      },
    ];

    await Product.insertMany(productData);

    const products = await Product.find();

    expect(products).toHaveLength(productData.length);
  });
});
