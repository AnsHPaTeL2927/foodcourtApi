require("dotenv").config();
const express = require("express");
// import cors from "cors";
// var cors = require('cors')
const app = express();
const connectDB = require('./DB/connect')
const PORT = process.env.PORT || 5000;

const restaurant_routes = require("./routes/restaurant");

app.get("/", (res, req) => {
    res.setEncoding("Hi, I am Live");
});

// const corsOptions = {
//     origin: true,
//   };
app.use("/api/restaurants", restaurant_routes);  
// app.use(cors(corsOptions));
 
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