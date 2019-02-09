
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    canBuy: Boolean,
    image: String,
    description: String,
}); 


var Product = mongoose.model('Product', ProductSchema, 'Product');
module.exports = Product;