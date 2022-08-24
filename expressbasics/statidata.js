const { request } = require('express')
const express=require('express')
const path=require('path')
const app=express()
port=8000

//5.inbuilt middleware-provide  location location of the static webresources
//to access it from the browser
app.use(express.static('./public'))

//to add one more folder to serve static files 

// app.use(express.static('./files'))


//6. to createdummy path
//1 args=> dummy Path ,2nd arg=>Path
//to http://localhost:8000/biryani/product/image/download.jpeg
// app.use('/biryani',express.static('./public'))

//7. rendering the file
app.get('/',(request,response)=>{
    response.sendFile(path.join(__dirname,'public/home.html'))
})

//8.
//create an error
app.all("*",(req,res)=>{
    throw new Error("Path doesn't exists")
})
//error handling middlelware write at last
app.use((err,req,res,next)=>{
    res.status(500);
    res.send(err.message)

})

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
})