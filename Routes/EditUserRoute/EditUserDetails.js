const express =require('express');
const EditUserDetails=require('../../Controllers/DetailsController/EditUserDetails.js');
const router=express.Router();
router.put("/useredit/:userid",EditUserDetails);

module.exports=router;