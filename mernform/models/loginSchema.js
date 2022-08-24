const mongoose=require('mongoose')
const Schema=mongoose.Schema

let loginschema=new Schema({
     FirstName:{
         type:String,
         minLength:2,
         maxLength:20,
         require:true
     },
     LastName:{
        type:String,
        minLength:2,
        maxLength:20,
        require:true
    },
    Age:{
        type:Number,
        min:10,
        max:50,
    },
    Qualification:{
        type:String,
        minLength:2,
        maxLength:20,
        require:true
    },
    Designation:{
        type:String,
        minLength:2,
        maxLength:20,
        require:true
    },

})

module.exports=mongoose.model("LoginForm",loginschema)
