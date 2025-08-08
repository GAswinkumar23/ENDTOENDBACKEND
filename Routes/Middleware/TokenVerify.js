const express = require('express');
const router = express.Router();
const verifyToken = require('../../Controllers/MiddleWare/VerifyToken.js');

router.get('/user/:userid',verifyToken,(req,res)=>{
        const {userid}=req.params;
        console.log("From Userid:", req.user.id);
        console.log("From params:", userid);
        if(req.user.id===userid)
        {
            return res.status(200).json({
                message: "User verified successfully",
                user: {
                    id: req.user.id,
                    name: req.user.name,
                    email: req.user.email,
                    mobile: req.user.mobile
                }
            });
        }
        return res.status(403).json({ message: "Unauthorized access" });
});
module.exports = router; 