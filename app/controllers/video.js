const mongoose = require('mongoose');
const Videos = mongoose.model('Videos');
const fs = require('fs');
const _ = require('lodash');


module.exports.getAll = getAll;
module.exports.create = create;


function getAll(req, res) {
  res.ok("video controller");
};


function create(req, res) {
  var file = req.files.file;

  if (file.mimetype !== 'video/mp4') {
    return res.json({
      message: 'Type is not mp4'
    });
  }

  fs.writeFile('uploads/test.mp4', file.data, (err, result) => {
    if (err) return res.json(err);
    res.json({
      message: 'OK'
    });
  });

};
