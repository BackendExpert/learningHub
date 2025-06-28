const express = require('express');
const DataController = require('../controllers/DataController');

const router = express.Router();

router.post('/create_item', DataController.add_data)

module.exports = router;