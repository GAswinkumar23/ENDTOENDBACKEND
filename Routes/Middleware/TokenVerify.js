const express = require('express');
const router = express.Router();
const verifyToken = require('../../Controllers/MiddleWare/VerifyToken.js');

router.get('/user/verify',verifyToken,(req,res)=>{
        
        console.log("From Userid:", req.user.id);

        if(req.user.id)
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