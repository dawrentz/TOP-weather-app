//index.js

//imports
import "./style.css";
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

  //gives user "searching" feedback and is overwritten by the api call when resolved
  renderMod.renderWeatherInfo(
    "", // conditions
    "", // temp
    "Searching...", // resolvedAddress
    "", // unitGroup
    "🔍", // emoji
    `"Hang out, while I figure out what's goin' on...`, // quote
    `<u>Mason Storm II</u>` // quoteSrc
  );

  renderMod.showWeatherReport();
});
