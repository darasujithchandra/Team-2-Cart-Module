const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartItemSchema = new Schema({

    email: {
        type: String,
        // ref:'User',
        // unique:true
    },
    amount: {
        type: Number,
        default: 10
    },
    books: [
        {
            quantity: {
                type: Number,
                default: 1
            },
            bookid: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products',
            }
        }
    ]
});

const CartItem = mongoose.model('CartItem', CartItemSchema);

module.exports = CartItem;