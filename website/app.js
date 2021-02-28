/* Global Variables */
//Personal API
const appID = "9ad2ba6aeb51853a32d2a00a33ecb79d";
const baseURL = "http://api.openweathermap.org/data/2.5/weather";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

//Event listener for click on "Generate"
document.getElementById("generate").addEventListener("click", generateEntry);
//function generated on click
async function generateEntry(e) {
    let zipCode = document.getElementById("zip").value;
    let userFeelings = document.getElementById("feelings").value;
    let URL = `${baseURL}?zip=${zipCode}&appid=${appID}&units=imperial`;
    let response = (await fetch(URL)).json();
    response.then(data => {
        console.log(data)
        document.getElementById("date").innerText = `Date: ${newDate}`;
        document.getElementById("temp").innerText = `Temperature: ${data.main.temp}°F`;
        document.getElementById("content").innerText = `User Feeling is: ${userFeelings}`;

    })
}

if (status === 200) {
    updateUI("/all")
}

// ADD GET and POST to rethrieve data on the cliente side

const getWeatherData = async(URL) => {
    const response = await fecth(URL);
    return await response.json();
}

// FUNCTION POST DATA

const postData = async(url = "", data = {}) => {
    const response = await fecth(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content- Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    });
    return await response.json();

}