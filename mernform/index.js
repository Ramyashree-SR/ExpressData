const express=require('express')
const app=express()
let cors=require('cors')
require('dotenv').config()
let port=process.env.PORT||8000
require('./config/db')

let loginroutes=require('./routes/loginRoutes')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use('/login',loginroutes)

app.use((err,req,res,next)=>{
    res.status(500,{
        err:true,
        message:err.message,
        data:null
    })
})

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
})