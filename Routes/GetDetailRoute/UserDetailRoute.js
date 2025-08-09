const express = require('express');

const UserDetailController = require('../../Controllers/DetailsController/UserDetailContoller.js');
const router = express.Router();
router.get('/:userid',UserDetailController);

module.exports=router;