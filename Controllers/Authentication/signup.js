const express = require('express');
const mongoose = require('mongoose');
const { sign } = require('jsonwebtoken');
const { User } = require('../../Models/Models.js');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const app = express();
const SignUpController = async (req, res) => {
    const { name, email, mobile, password, } = req.body;
    if (!name || !email || !password || !mobile) {
        return res.status(400).json({ message: "Please provide all fields" });
    }
    const existinguser = await User.findOne({ email: email });
    if (existinguser) {
        return res.status(400).json({ message: "User already exists" });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        name: name,
        email: email,
        password: hashedpassword,
        mobile: mobile
    });
    await newUser.save();
    console.log(res.json({
        message: "User created successfully", user: {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            mobile: newUser.mobile
        }
    }));
    return res.status(201).json({
        message: "user created successfully",
        user: {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            mobile: newUser.mobile
        }
    });
}

module.exports = SignUpController;