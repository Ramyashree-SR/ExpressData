const express=require('express')
const router=express.Router()

const productController=require('../controllers/products')
const auth =require("./../middleware/auth")

router.get("/products",auth.authorizeUserAdmin, productController.getAllProducts)      //auth.authorizeUserAdmin

router.post("/add-product",auth.authorizeAdmin, productController.addProduct)       //,auth.authorizeAdmin 

router.put("/edit-product",auth.authorizeAdmin,productController.editProduct)          //auth.authorizeAdmin,

router.delete("/delete-product",auth.authorizeAdmin,productController.deleteProduct)    //,auth.authorizeAdmin ,

module.exports=router