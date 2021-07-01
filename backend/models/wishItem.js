const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const WishItemSchema = new Schema({

    email: {
        type: String,
        // ref:'User',
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products',
        }
    ]
});

const WishItem = mongoose.model('WishItem', WishItemSchema);

module.exports = WishItem;