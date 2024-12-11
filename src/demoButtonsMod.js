// demoButtonsMod.js

//imports
import * as renderMod from "./renderMod.js";

//declarations
const weatherResultsLeftSectionElm = document.querySelector(
  "#weather-results-left-section"
);

const conditions = [
  "error",
  "cloud",
  "wind",
  "snow",
  "fog",
  "smoke",
  "rain",
  "tornado",
  "sun",
  "clear",
  "storm",
];

// ====================================== Init ====================================== //
conditions.forEach((condition) => {
  renderDemoButton(condition);
});

// ====================================== Major Functions ====================================== //

function renderDemoButton(textContentArg) {
  const demoBtn = document.createElement("button");
  demoBtn.classList.add("demo-btn");
  demoBtn.id = `${textContentArg}-demo-btn`;
  //comes in all lowerCase
  demoBtn.textContent = capFirstLetter(textContentArg);

  demoBtn.addEventListener("click", () => demoBtnClick(demoBtn));
  weatherResultsLeftSectionElm.appendChild(demoBtn);
}

// ====================================== Lesser Functions ====================================== //
function demoBtnClick(btn) {
  const condition = btn.textContent;
  const { emoji, emojiDescript } = renderMod.getEmoji(condition);
  const { quote, quoteSrc } = renderMod.getMasonQuote(emojiDescript);

  renderMod.renderWeatherInfo(
    condition, // conditions
    "32", // temp
    "Demo Location", // resolvedAddress
    "us", // unitGroup
    emoji, // emoji
    quote, // quote
    quoteSrc // quoteSrc
  );
}

function capFirstLetter(string) {
  const stringArr = string.split("");
  stringArr[0] = stringArr[0].toUpperCase();

  return stringArr.join("");
}
