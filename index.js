const express = require("express");
const app = express();
app.use(express.json()); //cover json to string
const cors=require("cors");
app.use(cors())
app.listen(8080);
app.get("/ping", (req, res) => {
    //http://localhost:8080/ping
    res.send(`Hello today`);
});
app.get("/api", (req, res) => {
    //http://localhost:8080/api?name=Phong&gender=male
    let { name, gender } = req.query;
    res.status(200).send(name + " " + gender);
});
app.get("/api/:id/:age", (req, res) => {
    try {
        //http://localhost:8080/api/1993/29
        // body={
        //     "gender":"Male",
        //     "name":"Phong"
        //   }
        const { name, gender } = req.body;
        const { id, age } = req.params;
        res.send(id + " " + age + " " + gender + " " + name);
        //dataSend not number res.send(1)
    } catch (error) {
        res.status(404).send("Sorry");
    }
});
//yarn add mysql2
const mysql = require("mysql2");
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "db_food",
    port: 3308,
});
app.get("/api/getuser", (req, res) => {
    conn.query(`SELECT*FROM user`, (err, result) => {
        res.status(200).send(result);
    });
});
// or
// app.get("/api/user", async (req, res) => {
//     const sql = "SELECT*FROM user";
//     const result = await conn.promise().query(sql);
//     res.send(result[0]);
// });
//check serack
app.get("/search/:name", (req, res) => {
    let { name } = req.params;
    conn.query(
        `SELECT*FROM user WHERE full_name LIKE '%${name}%'`,
        (err, result) => {
            console.log('result: ', result);
            res.status(200).send(result);
        }
    );
});


//status 200,400,500 ...search google