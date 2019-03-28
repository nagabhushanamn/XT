var express = require('express');
var router = express.Router();

var indexView = require('../views/index')

router.get('/', function (req, res, next) {
  res.send(indexView.html);
});

module.exports = router;
