const mongoose=require('mongoose')

let Schema=mongoose.Schema

let prodSchema=new Schema({
    pName:{
      type:String,
      minlength:3,
      maxlength:50
    },
    pDesc:{
        type:String,
        minlength:3,
        maxlength:50
      },
      pPrice:{
        type:Number,
        minlength:1,
        maxlength:5000000
      },
      pDate:{
        type:Date,
        default:Date.now()
      }
})


module.exports=mongoose.model("mechprod",prodSchema)