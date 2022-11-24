const express = require("express");
const userRoute = express.Router();
const { getUser } = require("../controllers/userControllers");
userRoute.get("/getUser", getUser);

module.exports = userRoute;
