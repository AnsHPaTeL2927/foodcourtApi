require("dotenv").config();
const connectDB  = require("./DB/connect");
const restaurant = require("./models/restaurant_schema");
const RestaurantJson = require("./restaurant.json")

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        await restaurant.deleteMany();
        await restaurant.create(RestaurantJson);
        console.log("success")
    }   
    catch(error){
        console.log(error);
    }
}; 

start();