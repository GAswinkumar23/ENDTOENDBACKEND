const express=require('express');
const Signup=require('../../Controllers/Authentication/signup.js');
const Signroute=express.Router();
Signroute.post("/signup",Signup);


module.exports=Signroute;