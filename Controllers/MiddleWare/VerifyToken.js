const express = require('express');
const mongoose = require('mongoose');
const jwt =require('jsonwebtoken');
require('dotenv').config();
const verifytoken=(req,res,next)=>{
    const author=req.headers['authorization'];
    const token=author?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:"Access denied, no token provided"});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET_CODE_AK);
        req.user=decoded;
        next();
    }
    catch(error)
    {
        return res.status(400).json({message:"Invalid token"});
    }
}
module.exports=verifytoken;