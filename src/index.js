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

//testing
// function getEmoji() {
//   const emoji = "☁️";
//   return emoji;
// }

// const emoji = getEmoji();

// //test
// console.log(emoji);

// function getQuote(emoji) {
//   let quote;
//   let quoteSrc;

//   if (emoji === "🚫") {
//     quote = `"What the hell are you doin'?"`;
//     quoteSrc = `Mason Storm: The Comeback II`;
//   }

//   if (emoji === "☔") {
//     quote = `"Sara... Sara loved the rain..."`;
//     quoteSrc = `Mason Storm (Director's Cut)`;
//   }

//   if (emoji === "💨") {
//     quote = `"Gimme a jacket. Leather. Black."`;
//     quoteSrc = `Mason Storm: UNLEASHED (S1E8)`;
//   }

//   if (emoji === "❄️") {
//     quote = `"It'll be a cold day in Honolulu before you kill me!"`;
//     quoteSrc = `Mason Storm: A Time to Die`;
//   }

//   if (emoji === "🌫️") {
//     quote = `"This haze really takes me back... keep your eyes peeled..."`;
//     quoteSrc = `Mason Storm: Return to Vietnam`;
//   }

//   if (emoji === "☁️") {
//     quote = `"I can't see it... the vision... it's too cloudy!"`;
//     quoteSrc = `cameo from Taken 8: Kidnapped in Space`;
//   }

//   if (emoji === "🌀") {
//     quote = `"I don't think were in Brooklyn anymore, Toto"`;
//     quoteSrc = `Mason Storm 2: Lost in Time (1999)`;
//   }

//   if (emoji === "☀️") {
//     quote = `"The sun'll never set on your grave... Cause there'll be nothin' left!"`;
//     quoteSrc = `Mason Storm: The Final Chapter IV`;
//   }

//   if (emoji === "🌄") {
//     quote = `"I'm here to clear your conscious... with my .45 automatic..."`;
//     quoteSrc = `2 Seconds 2 Midnight 2`;
//   }

//   if (emoji === "⛈️") {
//     quote = `There's a STORM comin'!!!"`;
//     quoteSrc = `Mason Storm (Theatrical Cut)`;
//   }

//   return { quote, quoteSrc };
// }

// const { quote, quoteSrc } = getQuote(emoji);

// console.log(quote);
// console.log(quoteSrc);

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

function getMasonQuote(emoji) {
  let quote;
  let quoteSrc;

  //test
  console.log(emoji);
  console.log(emoji === "☁️");

  //error
  if (emoji === "🚫") {
    quote = `"What the hell are you doin'?"`;
    quoteSrc = `Mason Storm: The Comeback II`;
  }

  //rain
  if (emoji === "☔") {
    quote = `"Sara... Sara loved the rain..."`;
    quoteSrc = `Mason Storm (Director's Cut)`;
  }

  //wind
  if (emoji === "💨") {
    quote = `"Gimme a jacket. Leather. Black."`;
    quoteSrc = `Mason Storm: UNLEASHED (S1E8)`;
  }

  //snow
  if (emoji === "❄️") {
    quote = `"It'll be a cold day in Honolulu before you kill me!"`;
    quoteSrc = `Mason Storm: A Time to Die`;
  }

  //fog
  if (emoji === "🌫️") {
    quote = `"This haze really takes me back... keep your eyes peeled..."`;
    quoteSrc = `Mason Storm: Return to Vietnam`;
  }

  //cloud
  if (emoji === "☁️") {
    quote = `"I can't see it... the vision... it's too cloudy!"`;
    quoteSrc = `Taken 8: Kidnapped in Space (cameo)`;
  }

  //tornado
  if (emoji === "🌀") {
    quote = `"I don't think were in Brooklyn anymore, Toto"`;
    quoteSrc = `Mason Storm 2: Lost in Time (1999)`;
  }

  //sun
  if (emoji === "☀️") {
    quote = `"The sun'll never set on your grave... Cause there'll be nothin' left!"`;
    quoteSrc = `Mason Storm: The Final Chapter IV`;
  }

  //clear
  if (emoji === "🌄") {
    quote = `"I'm here to clear your conscious... with my .45 automatic..."`;
    quoteSrc = `2 Seconds 2 Midnight 2`;
  }

  //storm
  if (emoji === "⛈️") {
    quote = `There's a STORM comin'!!!"`;
    quoteSrc = `Mason Storm (Theatrical Cut)`;
  }

  return { quote, quoteSrc };
}

const weatherEmoji = getEmoji("sun");
console.log(weatherEmoji);
const weatherQuote = getMasonQuote(weatherEmoji);
console.log(weatherQuote);
