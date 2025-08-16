const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const verifytoken = (req, res, next) => {
    const author = req.headers['authorization'];
    const token = author?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Access denied, no token provided" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_CODE_AK);
        console.log("Decoded token:", decoded);
        req.user = decoded;
        next();
    }
    catch (err) {
        if (err.name === 'TokenExpiredError') {
            console.log("❌ Token has expired");
            return res.status(401).json({"message the token":err.message})
        } else {
            console.log("❌ Invalid token:", err.message);
        }

    }
}
module.exports = verifytoken;