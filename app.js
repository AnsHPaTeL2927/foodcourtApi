require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require('./DB/connect')
const PORT = process.env.PORT || 5000;

const restaurant_routes = require("./routes/restaurant");

app.get("/", (res, req) => {
    res.setEncoding("Hi, I am Live");
});

app.use("/api/restaurants", restaurant_routes);  
 
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} YEs I am Connected`);
        });
    } catch (error) {
        console.log(error)
    }
}

start();