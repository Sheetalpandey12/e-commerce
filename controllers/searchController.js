const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const Product = require('../models/Product');


exports.searchproduct = async function (req, res) {
    try {
      let data = req.query;
      if (Object.keys(data).length == 0) {
        return res.status(400).send({ status: false, message: "No input provided" });
      }
      
      let t1 = { name: 1, description: 1, variants: 1 };
  
      if (data.variants) { 
        let variantsData = await Product.find({ "variants.name": data.variants }).select(t1);
        if (variantsData.length === 0) {
          return res.status(404).send({ status: false, message: "No matching variants found", data: [] });
        }
        return res.status(200).send({ status: true, message: "Success", data: variantsData });
      }
  
      let otherData = await Product.find(data).select(t1);
      if (otherData.length === 0) {
        return res.status(404).send({ status: false, message: "No matching products found", data: [] });
      }
  
      res.status(200).send({ status: true, message: "Success", data: otherData });
    } catch (error) {
      return res.status(500).send({ status: false, message: error.message });
    }
  };
  
  