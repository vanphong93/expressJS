const express = require("express");
const resRoute = express.Router();
const {
    postLike,
    unLike,
    listLikeRes,
    listLikeUser,
    postRate,
    deleteRate,
    listRateRes,
    listRateUser,
    editRate,
    newOrder,
    editOrder,
    deleteOrder,
} = require("../controllers/resControllers");
resRoute.post("/like", postLike);
resRoute.delete("/unlike", unLike);
resRoute.get("/like-res", listLikeRes);
resRoute.get("/like-user", listLikeUser);
resRoute.post("/rate", postRate);
resRoute.delete("/delete-rate", deleteRate);
resRoute.get("/rate-res", listRateRes);
resRoute.get("/rate-user", listRateUser);
resRoute.put("/edit-rate", editRate);
resRoute.post("/order", newOrder);
resRoute.put("/edit-order", editOrder);
resRoute.delete("/delete-order", deleteOrder);
module.exports = resRoute;
