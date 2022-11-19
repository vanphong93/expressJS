const express = require("express");
const app = express();
app.use(express.json());
app.listen(8080, () => {
    console.log("server is running");
});
app.get("/ping", (req, res) => {
    res.send("Hello to day");
});
// app.get("/api", (request, response) => {
//     const { id } = request.query;
//     response.status(200).send([id]);
// });
// app.get("/api/:id", (request, response) => {
//     const { id } = request.params;
//     const { hoTen, lopHoc } = request.body;
//     response.status(200).send(hoTen);
// });
