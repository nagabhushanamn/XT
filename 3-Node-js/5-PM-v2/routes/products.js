var express = require('express');
var router = express.Router();

var Product = require('../model/Product');

router.get('/', function (req, res, next) {

  // Non-Blocking-IO
  Product.find((err, products) => {
    if (err) {
      next(err);
      return;
    }
    res.render('products-view', { products })
  });

});

router.get('/new', (req, res, next) => {
  res.render('product-form');
})
router.get('/delete', (req, res, next) => {
  let id = req.query.id;
  Product.remove({ _id: id }, (err, data) => {
    res.redirect("/products");
  })
})

router.post('/', (req, res, next) => {
  let newProduct = req.body;
  let product = new Product(newProduct);
  product.save((err, p) => {
    res.redirect("/products");
  })
})

module.exports = router;
