// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("bodyparser");
const cors = require("cors");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

//Spin up the server
const port = 8000;
const server = app.listen(port, function () {
    console.log(`running on localhost: $(port)`);    
});

//GET route returns projectData
app.get("/all", function(request, response){
    response.send(projectData);
});

//POST route adds data to projectData
app.post("/add", function (request, response){
    projectData = {
    temperature: request.body.temperature,
    date: request.body.date,
    userResponse: request.body.userResponse,
};

response.send({
    status:200,
    message: "Success Entry"
});
});



/*
app.js
let d = new Date();
let newDate = (d.get.Month() +1) + "."+d.getDate() + "." + d.getFullYear();

//event listener for when the generated entry button is clicked

document.getElementById("generate").addEventListener("click"; generateEntry);

/*function called by onclick event listener
async fucntion generateEntry(event) {
    cosnt zipCode = document.getElementById("zip").value;
    const userResponse = document.getElementById("feelings").value;

    const weatherData = await getWeatherData(baseURL, zipCode; appID)
    const postResponse: userResponse,
});

if(postResponse.status === 200) {
    updated UI("/all")
}
}

/*function to get web API Data 

const getWeatherData = async (baseURL, zipCode, appID) => {
    const openWeatherApiUrl= baseURL + zipCode + "&appid=" + appID + "&units=imperial";
    const response = await fetch(openWeatherApiUrl);
    return await response.json();
}
/*function to POST data

cons postData = async (url ""= , data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credencials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },

        body: JSON.stringify(data)

    });
return await response
};
