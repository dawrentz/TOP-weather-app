// demoButtonsMod.js

//imports
import * as renderMod from "./renderMod.js";

//declarations
const demoBtnsContainerElm = document.querySelector("#demo-btns-container");

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
  demoBtnsContainerElm.appendChild(demoBtn);
}

// ====================================== Lesser Functions ====================================== //

function demoBtnClick(btn) {
  const condition = btn.textContent;
  const { emoji, emojiDescript } = renderMod.getEmoji(condition);
  const { quote, quoteSrc } = renderMod.getMasonQuote(emojiDescript);

  renderMod.renderWeatherInfo(
    condition, // conditions
    "Demo Temp", // temp
    "Demo Location", // resolvedAddress
    "", // unitGroup
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
