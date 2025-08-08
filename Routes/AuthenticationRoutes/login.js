const express = require('express');
const mongoose = require('mongoose');
const LoginController = require('../../Controllers/Authentication/login.js');
const LoginRoute=express.Router();
LoginRoute.post("/login", LoginController);
module.exports = LoginRoute;