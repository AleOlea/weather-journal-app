// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
const { request, response } = require("express");

// Start instance of app
const app = express();

//Middleware
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder that points the server to the index.html
app.use(express.static('website'));

// Setup Server
const port = 8000;
app.listen(port);
console.log("hello world");


// GET route
app.get("/all", function(req, res) {
    res.send(projectData);
});

// POST route
app.post("/add", function(req, res) {

    projectData = {
        temperature: req.body.temperature,
        date: req.body.date,
        UserResponse: req.body.userResponse,
    };

    res.sendStatus(200)
        /*console.log("succesfully add entry");*/
});