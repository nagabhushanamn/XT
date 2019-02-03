var express = require('express');
var router = express.Router();

var Product = require('../model/Product');
var Review = require('../model/Review');

router
  .get('/', function (req, res, next) {
    Product.find((err, products) => {
      if (err) {
        next(err);
        return;
      }
      res.json(products)
    })
      .populate('reviews')
      .exec();

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

  .post('/:id/reviews', (req, res, next) => {
    let id = req.params.id;
    let review = new Review(req.body)
    Product.findOne({ _id: id }, (err, product) => {
      if (err) throw err;
      review.product = product._id;
      review.save((error, r) => {
        if (error) throw error;
        res.send(r)
      })
    })

  })
  .get("/:id/reviews", (req, res, next) => {
    let id = req.params.id;
    Review.find({ product: id })
     // .populate('product')
      .exec(function (error, reviews) {
        if (error) throw error;
        res.send(reviews)
      })
  })

module.exports = router;
