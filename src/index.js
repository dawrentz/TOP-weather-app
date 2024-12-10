//index.js

//imports
import "./style.css";
import * as getWeatherMod from "./getWeatherMod.js";
import * as renderMod from "./renderMod.js";

//declarations
const weatherReportForm = document.querySelector("#weather-report-form");
const locationInputElm = document.querySelector("#location-input");

// ====================================== Init ====================================== //

//ui
locationInputElm.addEventListener("click", locationInputElm.select);

weatherReportForm.addEventListener("submit", (event) => {
  //stop form submit
  event.preventDefault();
  // getWeatherMod.reportWeather();
  renderMod.showWeatherReport();
});
