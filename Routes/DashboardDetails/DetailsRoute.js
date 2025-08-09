const express = require('express');
const mongoose = require('mongoose');
const DetailController=require('../../Controllers/DetailsController/DetailContoller.js');
const User =require('../../Models/Models.js');
const router = express.Router();
router.get('/:userid',DetailController);
module.exports=router;