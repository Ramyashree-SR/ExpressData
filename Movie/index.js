const express = require('express')
const app = express()
// const exphbs = require('express-handlebars')
const mongoose= require('mongoose')
const port = 5000

const dbUrl="mongodb+srv://Ramyashree:QQl6Vi8tSqMOc88D@cluster0.ihjrjes.mongodb.net/?retryWrites=true&w=majority"
 
mongoose.connect(
    dbUrl,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
    (err)=>{
        if(!err){
            console.log("Db connection successuful")
        }else{
            console.log("Db failed to connect")
        }
    }
)
// let route=require('./Routes/dataMovie')


// app.engine("handlebars", exphbs.engine())
// app.set("view engine", "handlebars")
// app.use(express.urlencoded({ extended: true }))


// app.use('/dataMovie',route)
// app.get('/', (req, res) => {
//     res.render("MovieData.handlebars")
// })
app.get('/',(req,res)=>{res.json({message:"server connected "})})
app.get("/error",(req,res)=>{
    res.status(500).send("Oops something went wrong")
})

app.listen(port, () => {
    console.log(`listening to ${port}`);
})