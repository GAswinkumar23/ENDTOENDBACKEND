const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: Date, default: Date.now },
    priority: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});
const userschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    mobile: Number,
});

const User = mongoose.model('User', userschema);
const Event = mongoose.model('Event', eventSchema);

module.exports = { User, Event };