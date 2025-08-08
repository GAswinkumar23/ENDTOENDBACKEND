const express = require('express');
const mongoose = require('mongoose');
const { User } = require('../../Models/Models.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const app = express();
const LoginController = async (req, res) => {
    // Check if the request body contains email and password
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Please provide email and password" });
    }
    // Check if the user exists in the database
    const existinguser = await User.findOne({ email: email });
    if (!existinguser) {
        res.status(404).json({ message: "User not found" });
    }
    // Compare the provided password with the hashed password in the database
    const isvalidpassword = await bcrypt.compare(password, existinguser.password);
    if (!isvalidpassword) {
        return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: existinguser._id }, process.env.jwt_secret_code_ak,
        { expiresIn: '1h' }
    );
    console.log("Token generated " + token);
    res.status(200).json({
        message: "Login successful",
        token: token,
        user: {
            id: existinguser._id,
            name: existinguser.name,
            email: existinguser.email,
            mobile: existinguser.mobile
        }
    })

}
module.exports = LoginController;