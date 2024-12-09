//index.js

//imports
import "./style.css";

//declarations

// ====================================== Init ====================================== //

const weatherResultsElm = document.querySelector("#weather-results");
const searchWeatherBtn = document.querySelector("#weather-search-btn");

searchWeatherBtn.addEventListener("click", (event) => {
  //stop form submit
  event.preventDefault();

  const weatherJSON = getWeather(getLocationInput());
  weatherJSON.then(console.log);
});
