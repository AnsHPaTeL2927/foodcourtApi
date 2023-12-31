require("dotenv").config();
const express = require("express");
// import cors from "cors";
const cors = require('cors')
const app = express();
const connectDB = require('./DB/connect')
const PORT = process.env.PORT || 5000;

const restaurant_routes = require("./routes/restaurant");
app.use(
  cors({ 
    // origin: 'http://localhost:3000',   
    // methods: ["Get","POST"]
  }));
app.get("/api/restaurants", (res, req) => {
    res.setEncoding("Hi, I am Live");
});

app.use("/", restaurant_routes);  



 
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
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    // res.setHeader('Access-Control-Allow-Headers', 'Json, Authorization');
    next();
  });
start();