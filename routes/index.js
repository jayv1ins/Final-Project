const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');


router.get('/index', indexController.getIndex);
router.get('/index/:id', indexController.deleteData);

module.exports = router;

