

var express = require('express');
var router = express.Router();

var Product = require('../model/Product')
var Review = require('../model/Review')

var auth = require('../helpers/auth')

router
    .get('/', /*auth.ensureAuthenticated ,*/ function (req, res, next) {
        console.log(req._id);
        console.log(req.role);
        Product.find({})
            .then(products => {
                res.json(products)
            })
    })
    .delete('/:id', (req, res) => {
        let id = req.params.id;
        Product.remove({ _id: id })
            .then(() => {
                res.status(200).json({ message: 'product deleted' })
            })
    })
    .get('/:id', (req, res) => {
        let id = req.params.id;
        Product.findOne({ _id: id })
            .then(product => {
                res.json(product)
            })
    })
    .post('/', (req, res, next) => {
        let form = req.body;
        let newProdut = new Product(form);
        newProdut.save()
            .then(product => {
                res.status(201).json(product)
            })
    })
    .put('/:id', (req, res, next) => {
        let formData = req.body;
        let id = req.params.id;
        Product.findOne({ _id: id })
            .then(product => {
                product.name = formData.name;
                product.price = formData.price
                product.save()
                    .then((product) => {
                        res.json(product)
                    })
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