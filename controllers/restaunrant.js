const restaurant = require("../models/restaurant_schema");

const getAllRestaurant = async (req, res) => {
    const myData = await restaurant.find(req.query);
    res.status(200).json({myData});
};
const getAllRestaurantTesting = async (req, res) => {

    res.status(200).json({msg: "I am get all testing Restaurants"});
};

module.exports = { getAllRestaurant, getAllRestaurantTesting};