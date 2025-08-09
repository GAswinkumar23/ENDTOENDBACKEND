
const {User} = require('../../Models/Models.js');
const UserDetailController = async (req,res)=>{
    const userid=req.params.userid;
    try{
        const user=await User.findById(userid);
        if(!user){
            return res.status(404).json({message: "User not found"},);
        }
        return res.status(200).json({user}); 
    }
    catch(error){
        console.error("Error fetchinfg the data:", error);
    }
}
module.exports = UserDetailController;