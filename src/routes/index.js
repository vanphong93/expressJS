const express = require("express");
const rootRoute = express.Router();
const userRoute = require("./userRoute");
rootRoute.use("/user", userRoute)
module.exports = rootRoute


//http://localhost:8080/api/user/getUser