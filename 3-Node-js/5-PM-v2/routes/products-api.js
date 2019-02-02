var express = require('express');
var router = express.Router();

var Product = require('../model/Product');

router
  .get('/', function (req, res, next) {
    Product.find((err, products) => {
      if (err) {
        next(err);
        return;
      }
      res.json(products)
    });

  })
  
  .delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Product.remove({ _id: id }, (err, dbRes) => {
      res.status(200).json(dbRes);
    })
  })

  .get('/:id', (req, res, next) => {
    let id = req.params.id;
    Product.findById(id, (err, dbRes) => {
      res.status(200).json(dbRes);
    })
  })

  .post('/', (req, res, next) => {
    let newProduct = req.body;
    let product = new Product(newProduct);
    product.save((err, p) => {
      res.status(201).json(p);
    })
  })

  .put('/:id', (req, res, next) => {
    let newProduct = req.body;
    let id = req.params.id;
    let product = new Product(newProduct);
    Product.findByIdAndUpdate(id, product, (err, p) => {
      res.status(200).json(p);
    })
  })

module.exports = router;
