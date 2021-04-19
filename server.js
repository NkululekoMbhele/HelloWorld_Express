//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(request, response) {
    response.send("<h1>Hello, world</h1>");
});

app.get("/aboutus", function(req, res) {
    res.send("<h3>We are the Help you need.</h3>")
});
app.get("/contact", function(req, res) {
    res.send("contact me on this email address: mnhnku00@outlook.com")
})
app.get("/hobby", function(req, res) {
    res.send("<ul><li>Reading</li><li>Soccer</li><li>Niceties</li></ul>")
});

app.listen(3000, function() {
    console.log("Server started at http://localhost:3000");
});