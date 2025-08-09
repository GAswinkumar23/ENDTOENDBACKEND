const express = require('express');
const { Event } = require('../../Models/Models.js');

const AddEvent = async (req, res) => {
    const { title, description, time, date, priority, userId } = req.body;
    try {
        if (!title || !description || !time || !date || !priority || !userId) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newEvent = await new Event({
            title,
            description,
            date: new Date(date),
            time,
            priority,
            userId
        });
        newEvent.save();
        if (!newEvent) {
            return res.status(400).json({ message: "Failed to add event" });
        }
        console.log("Event added successfully:", newEvent);
        return res.status(201).json({ message: "Event added successfully", event: newEvent });
    }
    catch (error) {
        console.error("Error adding the event:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
module.exports = AddEvent;