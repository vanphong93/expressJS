const express = require("express");
const rootRoute = express.Router();
const userRoute = require("./userRoute");
const resRoute = require("./resRoute");
rootRoute.use("/user", userRoute);
rootRoute.use("/res",resRoute);
module.exports = rootRoute;
