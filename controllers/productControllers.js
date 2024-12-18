const Product = require("../models/productSchema")
const createProduct = async(req,res)=>{
        try {
            const newProduct=new Product(req.body)
            await newProduct.save()
            res.status(201).json({msg:"product created", Product :newProduct })
        } catch (error) {
            res.status(500).json({msg:error.msg})
        }
    }
    
    
    module.exports = {createProduct}


   const getProduct= async (req, res) => {
        try {
            const product = await Product.find()
            res.status(201).json({ msg: "product not found", product: product })
        } catch (error) {
            res.status(500).json({ msg: error.msg })
        }
    }
    

    module.exports = {getProduct}



    const updateProduct= async (req, res) => {
        try {
            const updateproduct = await updateProduct.findByIdAndUpdate({_id: req.params.id}, {...req.body});
            res.status(201).json({ msg: "product updated", product: updateProduct });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
    
    module.exports = {updateProduct}