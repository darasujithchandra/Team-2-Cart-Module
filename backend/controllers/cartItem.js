const CartItem = require("../models/cartItem");
const asyncHandler = require("../middleware/async");

const fetchAllCartItems = asyncHandler(async (req, res, next) => {
  res.json(res.advancedResults);
});

const addCartItems = asyncHandler(async (req, res, next) => {
  let cartItemRes = await CartItem.create(req.body);
  console.log(cartItemRes);
  res.status(201).json({ success: true });
});

const delCartItems = asyncHandler(async (req, res, next) => {
  CartItem.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(201).json({
        message: "product deleted",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

const patchCartItems = asyncHandler(async (req, res, next) => {
  await CartItem.findByIdAndUpdate(
    { _id: req.params.id },
    { qty: req.body.qty }
  )
    .then((result) => {
      res.status(201).json({
        message: "Quantity Updated",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = {
  fetchAllCartItems,
  addCartItems,
  delCartItems,
  patchCartItems,
};
