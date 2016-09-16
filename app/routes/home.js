const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/home');


module.exports = (app) => app.use('/', router);


router.get('/', HomeController.home);
