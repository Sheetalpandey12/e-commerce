const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);      
  } catch (error) {  
    res.status(500).json({ error: 'Internal Server Error' }); 
  }
}; 

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// // GET /products/search?query=keyword
// // GET /products/search?query=keyword
// exports.productSearch= async (req, res) => {
//   try {
//     const { query } = req.query;

//     const products = await Product.find({
//       $or: [
//         { name: { $regex: query, $options: 'i' } },
//         { description: { $regex: query, $options: 'i' } },
//         { 'variants.name': { $regex: query, $options: 'i' } }
//       ] 
//     });

//     res.json(products);
//   } catch (error) {
//     console.error('Error searching products:', error);
//     res.status(500).json({ error: 'Failed to search products' });
//   }
// };




// // Search products by name, description, or variant name
// exports.searchProducts = async (req, res) => {
//   try {
//     const { query } = req.query;

//     const products = await Product.find({
//       $or: [
//         { name: { $regex: query, $options: 'i' } },
//         { description: { $regex: query, $options: 'i' } },
//         { 'variants.name': { $regex: query, $options: 'i' } }
//       ]
//     });

//     res.json(products);
//   } catch (error) {
//     console.error('Error searching products:', error);
//     res.status(500).json({ error: 'Failed to search products' });
//   }
// };


// const Product = require('../models/Product');

// Search products by name, description, or variant name
// exports.searchProducts = async (req, res, next) => {
//   try {
//     const { query } = req.query;

//     const products = await Product.find({
//       $or: [
//         { name: { $regex: query, $options: 'i' } },
//         { description: { $regex: query, $options: 'i' } },
//         { 'variants.name': { $regex: query, $options: 'i' } }
//       ]
//     });

//     res.json(products);
//   } catch (error) {
//     next(error);
//   }
//}




