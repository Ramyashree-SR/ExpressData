const express=require('express')
const app=express()
port=4000

let getDate=(req,res,next)=>{
    console.log("middleware executed");
    let date=Date.now()
    //we can modify req and res object
    req.requestDate=date
    console.log("modified req",req);
    next()
}
//4.using middleware
app.use(getDate)

app.get('/',(request,response)=>{
    response.send("Hello World")
})
app.get('/getData',(req,res)=>{
    res.send(
        `<p>Current Date:</p>
        <h2 style=color:green>${new Date(req.requestDate)}</h2>
        <button onClick="alert('U clicked me')">Click me</button>
     `)
    })
    app.listen(port,()=>{
        console.log(`listening to the port ${port}`);
    })