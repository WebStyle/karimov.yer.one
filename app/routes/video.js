const express = require('express');
const router = express.Router();
const VideoController = require('../controllers/video');

module.exports = (app) => {
  app.use('/video', router);
};


router.get('/', VideoController.getAll);


router.post('/', VideoController.create);
