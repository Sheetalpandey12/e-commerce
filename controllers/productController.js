const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);      
  } catch (error) {  
    res.status(500).json({ error: ' create Internal Server Error' }); 
  }
}; 

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'all Internal Server Error' });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.query.productId);
    console.log(product)
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'get Internal Server Error' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.productId,req.body,{ new: true });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: ' put Internal Server Error' });
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
    res.status(500).json({ error: 'delete Internal Server Error' });
  }
};



exports.searchdata=  async function(req,res){
  try{
      let data= req.query
       console.log(data)   
       let t1= {name:1,description:1,variants:1}
       if(Object.keys(data)=="variants"){
       let xyz=Object.values(data)
       
        let Booksdata= await Product.find({"variants.name":` ${xyz}`}).select(t1)
        console.log(Booksdata)
         return res.status(200).send({status:true, message:"success", data:Booksdata})
       }
      let Booksdata= await Product.find(data).select(t1)

      if(Booksdata.length==0){
          return res.status(404).send({status:false,message:"your request is not correct"})
      }

      res.status(200).send({status:true, message:"success", data:Booksdata})

  }catch(error){
      return res.status(500).send({ status: false, message: error.message })     
  }}





