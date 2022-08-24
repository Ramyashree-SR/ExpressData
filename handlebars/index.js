const express=require('express')
const app=express()
const exphbs=require('express-handlebars')
const port=7000

//setup handlebars
app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.get('/',(req,res)=>{
    let person={
        uname:"Raju",
        role:"admin"
        }
        let {uname,role}=person
        res.render('home.handlebars',{uname,role})
})

app.get('/about',(req,res)=>{
    let person=[
        {
            username:"Teja",
            role:"admin"
        },
        {
            username:"Dhanush",
            role:"!admin"
        },
        {
            username:"Umashankar",
            role:"!admin"
        },

    ]
    res.render('about.handlebars',{person})
})

app.get('/contact',(req,res)=>{
 res.render('contact.handlebars',{
    username:["Raju","Rasthogi","Shubham"],
    isAdmin:false

 })
})


app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
})