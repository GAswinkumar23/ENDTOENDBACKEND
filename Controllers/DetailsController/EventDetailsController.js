
const {Event} = require('../../Models/Models.js');
const EventDetailController = async (req,res)=>{
    const userid=req.params.userid;
    try{
        const events=await Event.find({userId:userid});
        if(!events){
            return res.status(404).json({message: "User not found"},);
        }
        return res.status(200).json({events}); 
    }
    catch(error){
        console.error("Error fetchinfg the data:", error);
    }
}
module.exports = EventDetailController;