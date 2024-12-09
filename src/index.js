//index.js

//imports
import "./style.css";
import * as getWeatherMod from "./getWeatherMod.js";

//declarations

// ====================================== Init ====================================== //

const weatherResultsElm = document.querySelector("#weather-results");
const searchWeatherBtn = document.querySelector("#weather-search-btn");

searchWeatherBtn.addEventListener("click", (event) => {
  //stop form submit
  event.preventDefault();
  getWeatherMod.reportWeather();
});
