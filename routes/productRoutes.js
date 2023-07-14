const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const Product = require('../models/Product');

  

router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getProduct);
router.put('/:productId', productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);
 



module.exports = router; 

 

