const express = require("express")
const router = express.Router()
const {createProduct} = require("../controllers/productControllers")
const {getProduct} = require("../controllers/productControllers")
const {updateProduct} = require("../controllers/productControllers")

//router.post("/createproduct",createProduct)
//router.get("/getproduct",getProduct)
router.put("/updateproduct/:id", updateProduct)
//router.delete("/deleteproduct/:id",deleteProduct)





module.exports = router