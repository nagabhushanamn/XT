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
  console.log(user);
  console.log(item);
  client.rpush(user, item._id, function (err, reply) {
    if (err) { next(err); return; };
    if (reply) {
      res.json({ message: 'item added in cart' })
    }
  })
});
router.get('/:user', function (req, res, next) {
  let user = req.params.user;
  console.log(user);
  client.lrange(user, 0, -1, function (err, reply) {
    console.log(reply);
    res.json({ user: reply })
  });
});

module.exports = router;
