const express=require('express')

const route=express.Router()

let  LoginController=require("../Controllers/loginprocess")

route.get("/getAllLoginData",LoginController.getAllLoginData)
route.post("/addLoginData",LoginController.addLoginData)
route.put("/editLoginData",LoginController.editLoginData)
route.delete("/deleteLoginData",LoginController.deleteLoginData)

module.exports=route