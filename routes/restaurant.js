const express = require("express");
const router = express.Router();

const {getAllRestaurant, getAllRestaurantTesting} = require("../controllers/restaunrant");

router.route("/").get(getAllRestaurant);
router.route("/testing").get(getAllRestaurantTesting);

module.exports = router; 