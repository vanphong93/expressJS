const express = require("express");
const app = express();
app.use(express.json()); //cover json to string
const cors=require("cors");
app.use(cors())
app.listen(8080,() => { console.log("sever is running"); });
const mysql = require("mysql2");
const rootRoute = require("./routes");
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "db_food",
    port: 3308,
});

app.use("/api",rootRoute)