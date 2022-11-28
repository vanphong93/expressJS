const express = require("express");
const app = express();
const path = require("path");
app.use(express.json()); //cover json to string
const cors = require("cors");
app.use(cors());
const rootRoute = require("./routes");
app.use("/api", rootRoute);

// set the view engine to ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
    var mascots = [
        { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
        { name: "Tux", organization: "Linux", birth_year: 1996 },
        { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
    ];
    var tagline =
        "No programming concept is complete without a cute animal mascot.";

    res.render("pages/index", {
        mascots: mascots,
        tagline: tagline,
    });
});

// about page
app.get("/about", function (req, res) {
    res.render("pages/about");
});

app.listen(8080);
console.log("Server is listening on port 8080");
