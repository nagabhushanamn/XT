var express = require('express');
let router = express.Router()

router.route('/')
    .get((req, res, next) => {
        res.send("GET : /products")
    })
    .post((req, res, next) => {
        res.send("POST : /products")
    })


router.route('/:id')
    .get((req, res, next) => {
        res.send("GET : /products/:id")
    })
    .delete((req, res, next) => {
        res.send("DELETE : /products/:id")
    })


module.exports = router;