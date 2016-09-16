/**
 * Created by farrukh on 9/16/16.
 */
const express = require('express');
const router = express.Router();


module.exports = (app) => app.use(router);


router.use((req, res, next) => {
  res.ok = (data) => {
    return res.json({data:data, message: null, error: false});
  };
  next();
});
