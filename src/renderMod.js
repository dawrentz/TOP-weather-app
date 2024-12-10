// renderMod.js

//imports
import * as getWeatherMod from "./getWeatherMod.js";

//declarations
const reportAddressElm = document.querySelector("#report-address");
const tempuratureReportElm = document.querySelector("#temp-report");
const weatherEmojiElm = document.querySelector("#weather-emoji");
const masonQuoteElm = document.querySelector("#mason-quote");
const masonQuoteSrcElm = document.querySelector("#mason-quote-src");
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
  const { emoji, emojiDescript } = getEmoji(conditions);
  const { quote, quoteSrc } = getMasonQuote(emojiDescript);

  renderWeatherInfo(
    conditions,
    temp,
    resolvedAddress,
    unitGroup,
    emoji,
    quote,
    quoteSrc
  );
}

//export out for demo?
function renderWeatherInfo(
  conditions,
  temp,
  resolvedAddress,
  unitGroup,
  emoji,
  quote,
  quoteSrc
) {
  conditionReportElm.textContent = conditions;
  reportAddressElm.textContent = resolvedAddress;
  weatherEmojiElm.textContent = emoji;
  masonQuoteElm.textContent = quote;
  masonQuoteSrcElm.textContent = quoteSrc;

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
  let emojiDescript = "error";

  //rain
  if (
    formatCond.includes("rain") ||
    formatCond.includes("drizzle") ||
    formatCond.includes("precipitation")
  ) {
    emoji = "☔";
    emojiDescript = "rain";
  }

  //wind
  if (formatCond.includes("wind") || formatCond.includes("squall")) {
    emoji = "️💨";
    emojiDescript = "wind";
  }

  //snow
  if (
    formatCond.includes("snow") ||
    formatCond.includes("hail") ||
    formatCond.includes("ice")
  ) {
    emoji = "❄️";
    emojiDescript = "snow";
  }

  //fog
  if (formatCond.includes("fog")) {
    emoji = "🌫️";
    emojiDescript = "fog";
  }

  //smoke
  if (formatCond.includes("dust") || formatCond.includes("smoke")) {
    emoji = "️‍🔥";
    emojiDescript = "smoke";
  }

  //cloud
  if (
    formatCond.includes("cloud") ||
    formatCond.includes("overcast") ||
    formatCond.includes("cover")
  ) {
    emoji = "️☁️";
    emojiDescript = "cloud";
  }

  //tornado
  if (formatCond.includes("tornado") || formatCond.includes("hurricane")) {
    emoji = "️🌀";
    emojiDescript = "tornado";
  }

  //sun
  if (formatCond.includes("sun")) {
    emoji = "️☀️";
    emojiDescript = "sun";
  }

  //clear
  if (formatCond.includes("clear")) {
    emoji = "️🌄";
    emojiDescript = "clear";
  }

  //storm
  //"storm" takes presidence over "rainstorm", "snowstorm" or other storms (for Mason quote)
  if (formatCond.includes("storm") || formatCond.includes("thunder")) {
    emoji = "⛈️";
    emojiDescript = "storm";
  }

  return { emoji, emojiDescript };
}

function getMasonQuote(emoji) {
  let quote;
  let quoteSrc;

  //for some reason, the passed through emoji will NOT be recogonized as the same emoji
  //going back to getEmoji() and returning an "emoji emojiDescriptor" that can be looked the quote up here
  //it has something to do with the emoji being found in another function, things seem to work if the emoji variable is global
  //try it out here (need a cloudy location)
  //   console.log(emoji); //returns ☁️
  //   console.log(emoji === "☁️"); //returns false

  //error
  //   if (emoji === "🚫") {
  if (emoji === "error") {
    quote = `"What the hell are you doin'?"`;
    quoteSrc = `Mason Storm: The Comeback II`;
  }

  //rain
  //   if (emoji === "☔") {
  if (emoji === "rain") {
    quote = `"Sara... Sara loved the rain..."`;
    quoteSrc = `Mason Storm (Director's Cut)`;
  }

  //wind
  //   if (emoji === "💨") {
  if (emoji === "wind") {
    quote = `"Gimme a jacket. Leather. Black."`;
    quoteSrc = `Mason Storm: UNLEASHED (S1E8)`;
  }

  //snow
  //   if (emoji === "❄️") {
  if (emoji === "snow") {
    quote = `"It'll be a cold day in Honolulu before you kill me!"`;
    quoteSrc = `Mason Storm: A Time to Die`;
  }

  //fog
  //   if (emoji === "🌫️") {
  if (emoji === "fog") {
    quote = `"This haze really takes me back... keep your eyes peeled..."`;
    quoteSrc = `Mason Storm: Return to Vietnam`;
  }

  //cloud
  //   if (emoji === "☁️") {
  if (emoji === "cloud") {
    quote = `"I can't see it... the vision... it's too cloudy!"`;
    quoteSrc = `Taken 8: Kidnapped in Space (cameo)`;
  }

  //tornado
  //   if (emoji === "🌀") {
  if (emoji === "tornado") {
    quote = `"I don't think were in Brooklyn anymore, Toto"`;
    quoteSrc = `Mason Storm 2: Lost in Time (1999)`;
  }

  //sun
  //   if (emoji === "☀️") {
  if (emoji === "sun") {
    quote = `"The sun'll never set on your grave... Cause there'll be nothin' left!"`;
    quoteSrc = `Mason Storm: The Final Chapter IV`;
  }

  //clear
  //   if (emoji === "🌄") {
  if (emoji === "clear") {
    quote = `"I'm here to clear your conscious... with my .45 automatic..."`;
    quoteSrc = `2 Seconds 2 Midnight 2`;
  }

  //storm
  //   if (emoji === "⛈️") {
  if (emoji === "storm") {
    quote = `There's a STORM comin'!!!"`;
    quoteSrc = `Mason Storm (Theatrical Cut)`;
  }

  return { quote, quoteSrc };
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
