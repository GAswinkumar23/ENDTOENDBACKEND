const { Event } = require('../../Models/Models');

const DeleteEvent = async (req, res) => {
    try {
        const eventid = req.params.eventid;
        const deletedstatus = await Event.deleteOne({ _id: eventid });

        if (deletedstatus.deletedCount > 0) {
            return res.status(200).json({  message: "Event deleted successfully" });
        }
        return res.status(404).json({message: "Event not found or could not be deleted" });
    } catch (error) {
        return res.status(500).json({message: 'Server error', error });
    }
};

module.exports = DeleteEvent;