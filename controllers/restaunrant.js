const restaurant = require("../models/restaurant_schema");

const getAllRestaurant = async (req, res) => {
    const {_id} = req.query;
    const queryObject = {};

    if(_id){
        queryObject._id = _id;
    }

    let apiData = restaurant.find(queryObject);
    const myData = await apiData;
    res.status(200).json({myData});
};
const getAllRestaurantTesting = async (req, res) => {

    res.status(200).json({msg: "I am get all testing Restaurants"});
};

module.exports = { getAllRestaurant, getAllRestaurantTesting};