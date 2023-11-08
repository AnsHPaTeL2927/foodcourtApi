const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    

    
    name: {
        type: String,
        required: true
    },

    restaurant_image : {
        type: String 
    },

    contact: {
        type: Number,
        required: true
    },

    type: {
        type: String,
        default: "restaurant"
    },

    food: {
        Sizzler: {
            food_name:  [String],
            food_image: [String],
            food_price: [Number]
        },
        Punjabi: {
            food_name:  [String],
            food_image: [String],
            food_price: [Number]
        },
        Pizza: {
            food_name:  [String],
            food_image: [String],
            food_price: [Number]
        },
        Dosa: {
            food_name:  [String],
            food_image: [String],
            food_price: [Number]
        },
        Chinese:{
            food_name:  [String],
            food_image: [String],
            food_price: [Number]
        },
        FastFood: {
            food_name:  [String],
            food_image: [String],
            food_price: [Number]
        },
        Ice_Cream: {
            food_name:  [String],
            food_image: [String],
            food_price: [Number]
        },
        Coffee:{
            food_name:  [String],
            food_image: [String],
            food_price: [Number]
        }
    }

});
module.exports = mongoose.model("Restaurant", restaurantSchema);