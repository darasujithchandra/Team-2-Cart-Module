const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    discount: {
        type: String
    },
    available: {
        type: Number,
        required: true
    },
    category: {
        type: String
    },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;