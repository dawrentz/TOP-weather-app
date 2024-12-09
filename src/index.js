//index.js

//imports
import "./style.css";

//declarations

// ====================================== Init ====================================== //

const weatherResultsElm = document.querySelector("#weather-results");
const searchWeatherBtn = document.querySelector("#weather-search-btn");
const locationInputElm = document.querySelector("#location-input");

//need learn location api
async function getWeather(locationInput) {
  try {
    const weatherData = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInput}/2024-12-08?key=3LTVBASAQ7PVLZQWD6V4TN9MQ`
    );
    const weatherJSON = await weatherData.json();
    return weatherJSON.days[0].description;
  } catch (err) {
    console.log(err);
    return "will fix i promise";
    // throw "will fix i promise";
  }
}

const getLocationInput = () => locationInputElm.value;

//get today date

searchWeatherBtn.addEventListener("click", (event) => {
  //stop form submit
  event.preventDefault();

  const weatherJSON = getWeather(getLocationInput());
  weatherJSON.then(console.log);
});
