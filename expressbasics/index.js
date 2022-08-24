const { request, response } = require('express')
const express=require('express')
const app=express()
port=7000


//2. middleware to get date
let getDate=(req,res,next)=>{
    console.log("middleware executed");
    let date=Date.now()
    //we can modify req and res object
    req.requestDate=date
    console.log("modified req",req);
    next()
}
//using middleware
app.use(getDate)


//3. modifing 1st data
app.get('/',(request,response)=>{
    response.send("Hello "+ new Date(request.requestDate))
})

//1. created this first
app.get('/',(request,response)=>{
    response.send("Hello World")
})


app.get('/add',(req,res)=>{
    res.send("get add")
    console.log("get add");
})


app.post('/add',(req,res)=>{
    res.send("post add")
    console.log("post add");
})

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
})