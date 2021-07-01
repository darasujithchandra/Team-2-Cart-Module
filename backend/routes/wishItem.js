var express = require('express')
var app = express()
var router = express.Router()
const { fetchAllWishItems, addWishItems } = require('../controllers/wishItem')
const WishItem = require('../models/wishItem')
const advancedFind = require('../middleware/advancedFind');

router.route('/:id')
    .get(fetchAllWishItems)
router.post("/:id/:isbn", addWishItems);

// .post(addWishItems)

module.exports = router
