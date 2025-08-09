const express = require('express');
const EventDetailController = require('../../Controllers/DetailsController/EventDetailsController.js');
const router = express.Router();
router.get('/:userid',EventDetailController);

module.exports = router;