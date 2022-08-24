const mongoose=require('mongoose')
// import MovieData from './../component/MovieData';
let Schema=mongoose.Schema

const MoviesData=new Schema({
    movieName:{
       type:String,
       minLength:3,
       maxLength:10
    },
    movieDesc:{
        type:String,
        minLength:3,
        maxLength:10
     }
})
module.export=mongoose.Model("Movie",MoviesData)