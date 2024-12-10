// renderMod.js

//imports
import * as getWeatherMod from "./getWeatherMod.js";

//declarations
const reportAddressElm = document.querySelector("#report-address");
const tempuratureReportElm = document.querySelector("#temp-report");
const weatherEmojiElm = document.querySelector("#weather-emoji");
const masonQuoteElm = document.querySelector("#mason-quote");
const locationInputElm = document.querySelector("#location-input");
const conditionReportElm = document.querySelector("#condition-report");

// ====================================== Major Functions ====================================== //
export function showWeatherReport() {
  const searchInput = getLocationInput();
  const weatherReport = getWeatherMod.getWeather(searchInput);

  weatherReport.then(handleWeatherReport);
}

// ====================================== Lesser Functions ====================================== //

function handleWeatherReport(weatherObj) {
  const { conditions, temp, resolvedAddress, unitGroup } = weatherObj;
  const emoji = getEmoji(conditions);

  renderWeatherInfo(conditions, temp, resolvedAddress, unitGroup, emoji);
}

function renderWeatherInfo(
  conditions,
  temp,
  resolvedAddress,
  unitGroup,
  emoji
) {
  conditionReportElm.textContent = conditions;
  reportAddressElm.textContent = resolvedAddress;
  weatherEmojiElm.textContent = emoji;

  if (unitGroup === "us") {
    tempuratureReportElm.textContent = `${temp} F°`;
  } else if (unitGroup === "uk") {
    tempuratureReportElm.textContent = `${temp} C°`;
  }
}

function getEmoji(conditions) {
  const formatCond = conditions.toLowerCase();
  //init to error
  let emoji = "🚫";

  //rain
  if (
    formatCond.includes("rain") ||
    formatCond.includes("drizzle") ||
    formatCond.includes("precipitation")
  ) {
    emoji = "☔";
  }

  //wind
  if (formatCond.includes("wind") || formatCond.includes("squall")) {
    emoji = "️💨";
  }

  //snow
  if (
    formatCond.includes("snow") ||
    formatCond.includes("hail") ||
    formatCond.includes("ice")
  ) {
    emoji = "❄️";
  }

  //fog
  if (formatCond.includes("fog")) {
    emoji = "🌫️";
  }

  //smoke
  if (formatCond.includes("dust") || formatCond.includes("smoke")) {
    emoji = "️‍🔥";
  }

  //cloud
  if (
    formatCond.includes("cloud") ||
    formatCond.includes("overcast") ||
    formatCond.includes("cover")
  ) {
    emoji = "️☁️";
  }

  //tornado
  if (formatCond.includes("tornado") || formatCond.includes("hurricane")) {
    emoji = "️🌀";
  }

  //sun
  if (formatCond.includes("sun")) {
    emoji = "️☀️";
  }

  //clear
  if (formatCond.includes("clear")) {
    emoji = "️🌄";
  }

  //storm
  //"storm" takes presidence over "rainstorm", "snowstorm" or other storms (for Mason quote)
  if (formatCond.includes("storm") || formatCond.includes("thunder")) {
    emoji = "⛈️";
  }

  return emoji;
}

//no need for abstract?
//arrow function instead?
function getLocationInput() {
  const searchInput = locationInputElm.value;
  return searchInput;
}

// function handleWeatherError

// all weather conditions common weather keywords:
// rain
// drizzle
// precipitation
// "Sara... Sara loved the rain..." - from Mason Storm (Director's Cut)

// storm
// thunder
//"There's a STORM comin'!!!"  - from Mason Storm (Theatrical Cut)

// snow
// hail
// ice
// "It'll be a cold day in Honolulu before you kill me!" - from Mason Storm: A Time to Die

// fog
// "This haze really takes me back... keep your eyes peeled..." from Mason Storm: Return to Vietnam

// dust
// smoke
// "See the smoke up on the horizon? That's Comanche..." from Mason Storm Tames the West (TV Special)

// squalls
// wind
// "Gimme a jacket. Leather. Black." from Mason Storm: UNLEASHED (S1E8)

// clear
// "I'm here to clear your conscious... with my .45 automatic..." from 2 Seconds 2 Midnight 2

// cloud
// overcast
// cover
// "I can't see it... the vision... it's too cloudy!" cameo from Taken 8: Kidnapped in Space

// tornado
// "I don't think were in Brooklyn anymore, Toto" from Mason Storm 2: Lost in Time (1999)

// sun
// "The sun'll never set on your grave... Cause there'll be nothin' left!" from Mason Storm: The Final Chapter IV

//error
//"What the hell are you doin'?" from Mason Storm: The Comeback II
