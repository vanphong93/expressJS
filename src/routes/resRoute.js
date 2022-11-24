const express = require("express");
const resRoute=express.Router();
const {postLike, checkDemo, unLike, listLikeRes, listLikeUser, postRate, deleteRate, listRateRes, listRateUser, editRate}=require("../controllers/likeControlers");
resRoute.post("/like",postLike);
resRoute.post("/demo",checkDemo);
resRoute.delete("/unlike",unLike);
resRoute.get("/like-res",listLikeRes);
resRoute.get("/like-user",listLikeUser)
resRoute.post("/rate",postRate);
resRoute.delete("/delete-rate",deleteRate);
resRoute.get("/rate-res",listRateRes);
resRoute.get("/rate-user",listRateUser)
resRoute.put("/edit-rate",editRate);
module.exports = resRoute;