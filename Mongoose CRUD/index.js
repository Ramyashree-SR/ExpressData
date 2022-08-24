const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const port = 7000

const dbUrl = "mongodb+srv://satyam:sggLcY7PqtRy3kKd@cluster0.kahvu.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(
    dbUrl, { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) {
            console.log("Db connection successful");
        } else {
            console.log("Db failed to connect");
        }
    }
)

// importing products route
let productRoute = require('./Routes/products')
//setup template engine 
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")
// body parser middleware used to get data (object) from form body (req.body)
app.use(express.urlencoded({ extended: true }))

// creating routes 
app.use('/products', productRoute)
app.get('/', (req, res) => {
    res.render("home.handlebars")
})

app.get("/error",(req,res)=>{
    res.status(500).send("Oops something went wrong")
})

app.listen(port, () => {
    console.log(`listening to ${port}`);
})
