const Event=require('../../Models/Models.js')

const EditEvent=async (req,res)=>{
        const {eventid}=req.params;
        const {title,description,time,date,priority}=req.body;
       try{
        const event=await Event.findOne({_id:eventid});
        if(event){return res.status(404).json({message:"event not found"})}
        if(title) {event.title=title};
        if(description){event.description=description};
        if(time){event.time=time};
        if(date){event.date=date};
        if(priority){event.priority=priority}

        await event.save();
    }
       catch(err)
       {
         return res.json({"The Error Message":err});
       }
        
}
module.exports=EditEvent;