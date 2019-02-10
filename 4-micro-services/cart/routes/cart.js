var express = require('express');
var router = express.Router();

var redis = require('redis');
var client = redis.createClient();

client.on('connect', function () {
  console.log('connected');
});

router.post('/:user', function (req, res, next) {
  let user = req.params.user;
  let body = req.body;
  let item = body.item;
  let qty = body.qty;

  client.rpush(user, JSON.stringify({ item, qty }), function (err, reply) {
    if (err) { next(err); return; };
    if (reply) {
      res.json({ message: 'item added in cart' })
    }
  })


});
router.get('/:user', function (req, res, next) {
  let user = req.params.user;
  client.lrange(user, 0, -1, function (err, reply) {
    if (err) next(err);
    res.json(reply)
  });
});

module.exports = router;
