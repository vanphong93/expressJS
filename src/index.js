const express = require("express");
const app = express();
app.use(express.json()); //cover json to string
const cors=require("cors");
app.use(cors())
app.listen(8080,() => { console.log("sever is running"); });
const  rootRoute = require("./routes");
app.use("/api",rootRoute);
