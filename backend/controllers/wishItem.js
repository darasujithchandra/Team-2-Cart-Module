const WishItem = require('../models/wishItem')
const asyncHandler = require('../middleware/async');


const fetchAllWishItems = asyncHandler(async (req, res, next) => {
    console.log(req.params.id);
    try {
        const wishItems = await WishItem.findOne({ _id: req.params.id }).select('books');
        console.log(wishItems);
        if (!wishItems) {
            return res.status(400).json({
                success: false
            });
        }
        res.status(201).json({
            success: true,
            data: wishItems
        });
    } catch (err) {
        next(err);
    }
})

// const addWishItems = asyncHandler(async (req, res, next) => {

//     let wishItemRes = await WishItem.create(req.body);
//     console.log(wishItemRes);
//     res.status(201).json({ success: true })

// })
const addWishItems = asyncHandler(async (req, res, next) => {
    WishItem.updateMany({ _id: req.params.id },
        { $push: { books: { isbn: req.params.isbn, name: req.body } } },
        { multi: true })

        .then((result) => {
            res.status(201).json({
                message: "product added to wishlist",
                result: result,
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            });
        });
});

module.exports = { fetchAllWishItems, addWishItems }