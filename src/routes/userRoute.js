const express = require("express");
const {
    newOrder,
    editOrder,
    deleteOrder,
} = require("../controllers/likeControlers");
const userRoute = express.Router();
const { getUser } = require("../controllers/userControllers");
userRoute.get("/getUser", getUser);
userRoute.post("/order", newOrder);
userRoute.put("/edit-order", editOrder);
userRoute.delete("/delete-order", deleteOrder);
module.exports = userRoute;
