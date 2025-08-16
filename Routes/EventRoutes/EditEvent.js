const express = require('express');
const mongoose = require('mongoose');
const EventContoroller = require('../../Controllers/EditEventController/EditEventController.js');
const DeleteEvent = require('../../Controllers/EditEventController/DeleteEvents.js');
const EditEvent =require('../../Controllers/EditEventController/EditEvent.js')
const router = express.Router();

router.post('/eventadd', EventContoroller);
router.delete('/:eventid',DeleteEvent);
router.put('/edit/:eventid',EditEvent);
module.exports = router;