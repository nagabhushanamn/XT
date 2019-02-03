


var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ReviewSchema = new mongoose.Schema({
    stars: Number,
    author: String,
    body: String,
    product: { type: mongoose.Schema.ObjectId, ref: 'Product' },
});


var Review = mongoose.model('Review', ReviewSchema, 'Review');
module.exports = Review;