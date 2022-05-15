// This is where we will have our main JavaScript code

import Ajax from "./ajax.js";

//First, we define the variables from our HTML file
let homeButton = document.getElementById("homeButton");
let homeInput = document.getElementById("homeInput");
let homeDescription = document.getElementById("homeDescription");
let homeTemperature = document.getElementById("homeTemperature");

let homelatitude; // Define the variables globally to modify them locally
let homelongitude;
let touristlatitude;
let touristlongitude;

let homeTemperatureValue;
let touristTemperatureValue;
let distancehometourist;

let APIbase;
let homeAPI;
let APIkey;
let touristAPI;

homeInput.value = "";

// Define the functions we are going to use to add some purity
function distancecalculator(lat1, lon1, lat2, lon2) {
    const toRad = (value) => {
        return value * Math.PI / 180;
    };
// Use the Haversine formula
    let R = 6371;
    let x1 = lat2-lat1;
    let dLat = toRad(x1);
    let x2 = lon2-lon1;
    let dLon = toRad(x2);
    let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(toRad(lat1))
    * Math.cos(toRad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    let d = R * c;
    return d;
}

// Functions that alert the client followin the temperature difference
function weathercheck (temp1, temp2) {
    if (temp1 < temp2) {
            alert ("This seems like a warmer place to go on vacation!");
    } else if (temp1 > temp2) {
        alert ("Hmmm it doesn't seem like an ideal place it's colder " +
        "than in your city!");
    } else if (temp === temp2) {
        alert ("The weather is similar to where you live," +
        " but you may want to travel");
    }
}

homeButton.addEventListener("click", function () {
    APIbase = "http://api.openweathermap.org/data/2.5/weather?q=";
    homeAPI = homeInput.value + "&appid=";
    APIkey = "2188143fa5330caa5021ecb1771156e6";

    fetch(APIbase + homeAPI + APIkey)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            try{  // Try to store any value, if one doesn't work then none work
                homelatitude = data["coord"]["lat"];
            } catch{
                alert("please enter a valid city!");
            };
            // Stores here the value from the API we are going to use
            homelatitude = data["coord"]["lat"];
            homelongitude = data["coord"]["lon"];
            const homeNameValue = data["name"];
            const homeDescriptionValue = data["weather"][0]["description"];
            homeTemperatureValue =
            Math.round(data["main"]["temp"] - 273.15);

            homeName.innerHTML = homeNameValue; // Sends our value in our HTML
            homeDescription.innerHTML = "Your city has the following weather "
            + "description: " + homeDescriptionValue;
            homeTemperature.innerHTML = "Your city has a temperature of: "+
            Math.round(homeTemperatureValue) + " degrees Celsius";

            distancehometourist = distancecalculator(homelatitude,
            homelongitude, touristlatitude, touristlongitude);
            console.log(distancehometourist)

            if (Number.isInteger(Math.round(distancehometourist)) === true) {
                distance.textContent =
                "The distance between your city and your travel city is: "
                + Math.round(distancehometourist) + " kilometers";
            };
            weathercheck(homeTemperatureValue, touristTemperatureValue);
        });

    });
// We can also input a second city and its forecast, to know if
//it is a nice place to go on vacation


// Define the new values for the tourist place
let touristButton = document.getElementById("touristButton");
let touristInput = document.getElementById("touristInput");
let touristDescription = document.getElementById("touristDescription");
let touristTemperature = document.getElementById("touristTemperature");

touristInput.value = "";

touristButton.addEventListener("click", function () {
    APIbase = "http://api.openweathermap.org/data/2.5/weather?q=";
    touristAPI = touristInput.value + "&appid=";
    APIkey = "2188143fa5330caa5021ecb1771156e6";

    // Fetch the API with the new parameters
    fetch(APIbase + touristAPI + APIkey)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            try{  // Try to store any value, if one doesn't work then none work
                touristlatitude = data["coord"]["lat"];
            } catch{
                alert("please enter a valid city!")
            };
            // Stores again the values we will use
            touristlatitude = data["coord"]["lat"];
            touristlongitude = data["coord"]["lon"];
            const touristNameValue = data["name"];
            const touristDescriptionValue = data["weather"][0]["description"];
            touristTemperatureValue =
            Math.round(data["main"]["temp"] - 273.15);

            touristName.innerHTML = touristNameValue;
            touristDescription.innerHTML = "The weather description there is: "
            + touristDescriptionValue;
            touristTemperature.innerHTML =
            "The temperature value in this city is " +
            touristTemperatureValue + " degrees Celsius";

            distancehometourist = distancecalculator(homelatitude,
            homelongitude, touristlatitude, touristlongitude);

            if (Number.isInteger(Math.round(distancehometourist)) === true) {
                distance.textContent =
                "The distance between your city and your travel city is: "
                + Math.round(distancehometourist) + " kilometers";
            };
            weathercheck(homeTemperatureValue, touristTemperatureValue);
        });

        const objectToSend =
        {"reply1": distancehometourist, "tasktocarryout": "addtodistances"};
        Ajax.query(objectToSend).then(function (response) {
            console.log(response.reply1);
        });



});

