
const logindata=require("../models/loginSchema")

let getAllLoginData=async(req,res,next)=>{
    try {
        let loginprocess = await logindata.find().lean()
        res.json({
            error:false,
            message:"All Login Information",
            data:loginprocess
        })
    } catch (err) {
       next(err)
    }
}

let addLoginData=async(req,res,next)=>{
    let { FirstName,LastName,Age,Qualification,Designation }=req.body
    try {
        await logindata.insertMany([{ FirstName,LastName,Age,Qualification,Designation }])
        res.json({
            error:false,
            message:"Login Information Added Sucessfully",
            data:{ FirstName,LastName,Age,Qualification,Designation }
        })
    } catch (err) {
       next(err)
    }
}

let editLoginData=async(req,res,next)=>{
    let {_id,FirstName,LastName,Age,Qualification,Designation }=req.body
    try{
    await logindata.updateOne({_id:_id},{
        $set:{FirstName,
            LastName,
            Age,
            Qualification,
            Designation  }
            
        }),
        res.json({
            err:false,
            message:"LoginData Edited Sucessfully",
            data:{FirstName,LastName,Age,Qualification,Designation }
            })
        }
            catch(err){
                next(err)
            }
    }
    let deleteLoginData=async(req,res,next)=>{
        try {
            await logindata.deleteOne({ _id: req.body._id })
            res.json({
                error:false,
                message:"LoginData deleted successfully",
                data:null
            })
        } catch (err){
            next(err)
        }
    }

    module.exports={
       getAllLoginData,
       addLoginData,
       editLoginData,
       deleteLoginData,
     }