const express=require("express");
const router=express.Router();

let product=require("../models/product")

router.get("/products",async(req,res)=>{
 try{
    let products=await product.find().lean();         // data fetching from database
    res.render("products.handlebars",{products})
 }catch(err){
    res.redirect("/error")
 }
});

router.get("/addproduct",(req,res)=>{
   res.render('addproduct.handlebars')        /// taking data from application
})

router.post("/addproduct",async(req,res)=>{               //adding product
    let {pName,pDesc,pPrice}=req.body;
    try{
      await product.insertMany([{pName,pDesc,pPrice}]);
      res.redirect("/products/products");
     }catch(err){
      res.redirect("/error")
     }
});


//edit product send selected product details
router.get("/editproduct/:_id",async (req,res)=>{
   console.log(req.params._id);
   try{
      let productToEdit=await product.findOne({_id:req.params}).lean();
      res.render("editproduct.handlebars",{selectedProduct:productToEdit})
}catch(err){
   res.redirect("/error")
}
});

//find edit and updated object
router.post("/editproduct",async(req,res)=>{
   console.log(req.body);
   let {_id,pName,pDesc,pPrice}=req.body;
   try{
      await product.updateOne(
         {_id:_id},
         {
            $set:{
               pName,
               pDesc,
               pPrice
            },
           }
       )
         res.redirect("/products/products");
   }catch(err){
      res.redirect("/error")
   }
});

//delete product
router.get("/deleteproduct/:_id",async(req,res)=>{
   console.log(req.params._id);
   try{
      await product.deleteOne({_id:req.params._id});
      res.redirect("/products/products");
   }catch(err){
      res.redirect("/error");

   }
});

module.exports=router;