const express = require('express');
const mongoose = require('mongoose');
const EventContoroller = require('../../Controllers/EditEventController/EditEventController.js');

const router = express.Router();

router.post('/eventadd', EventContoroller);

module.exports = router;