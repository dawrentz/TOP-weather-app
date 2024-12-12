//index.js

//imports
import "./style.css";
import * as renderMod from "./renderMod.js";

//declarations
const weatherReportForm = document.querySelector("#weather-report-form");
const locationInputElm = document.querySelector("#location-input");

// ====================================== Init ====================================== //

//creates the demo buttons
//seemed good to run the demoBtn init in its module (has conditions array there)
import * as demoButtonsMod from "./demoButtonsMod.js";

//ui
//have a UI module?
locationInputElm.addEventListener("click", locationInputElm.select);

//add EL
//have an EL module?
weatherReportForm.addEventListener("submit", (event) => {
  //stop form submit
  event.preventDefault();

  //gives user "searching" feedback and is overwritten by the api call when resolved
  //could include this in the getQuote and getEmoji functions in render mod
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

//init weatherReport
const stormDemoBtn = document.querySelector("#storm-demo-btn");
stormDemoBtn.click();
