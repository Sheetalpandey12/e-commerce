const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const Product = require('../models/Product');

  

router.post('/create', productController.createProduct);
router.get('/readall', productController.getAllProducts);
router.get('/read',productController.getProduct);
router.put('/update/:productId', productController.updateProduct);
router.delete('/delete/:productId', productController.deleteProduct);

router.get('/search', productController.searchdata);
         

module.exports = router; 

 

