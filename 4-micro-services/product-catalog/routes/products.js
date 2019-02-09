var express = require('express');
var router = express.Router();
var Product = require('../model/Product');



router
  .get('/', function (req, res, next) {
    Product.find((err, products) => {
      if (err)
        res.status(500).json(err)
      res.json(products)
    })
  })
  .delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Product.remove({ _id: id }, (err, dbRes) => {
      if (err)
        res.status(500).json(err)
      res.status(200).json(dbRes);
    })
  })
  .get('/:id', (req, res, next) => {
    let id = req.params.id;
    Product.findById(id, (err, dbRes) => {
      if (err)
        res.status(500).json(err)
      res.status(200).json(dbRes);
    })
  })
  .post('/', (req, res, next) => {
    let newProduct = req.body;
    let product = new Product(newProduct);
    product.save((err, p) => {
      if (err)
        res.status(500).json(err)
      res.status(201).json(p);
    })
  })
  .put('/:id', (req, res, next) => {
    let newProduct = req.body;
    let id = req.params.id;
    let product = new Product(newProduct);
    Product.findByIdAndUpdate(id, product, (err, p) => {
      if (err)
        res.status(500).json(err)
      res.status(200).json(p);
    })
  })


module.exports = router;
