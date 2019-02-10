var express = require('express');
var router = express.Router();
var axios = require('axios');

router.post('/:user', function (req, res, next) {


  let user = req.params.user;

  axios.get(`http://localhost:4000/api/cart/${user}`)
    .then(response => {
      console.log(response)
      res.json('New order placed')
    })


});

module.exports = router;
