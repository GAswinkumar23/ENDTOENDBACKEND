const {User}=require('../../Models/Models.js');
const EditUserDetails= async(req,res)=>{
    const { userid } = req.params;
    const update=req.body;
    try{
        const user=await User.findOne({_id:userid});
        if(!user){
            return res.status(400).json({message:"User is Not Found"});
        }
        await User.updateOne({_id:userid},{$set:update})
        return res.status(200).json({message:"User detail Updated"});
    }
    catch(err)
    {
        console.log("Error updating user details:", err);
        return res.status(500).send("Internal Server Error");
    }
}

module.exports=EditUserDetails;