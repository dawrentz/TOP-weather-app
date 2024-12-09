//getWeatherMod.js

// ====================================== Declarations ====================================== //
const locationInputElm = document.querySelector("#location-input");

// ====================================== Major Functions ====================================== //

export async function getWeather(locationInput) {
  //declare in larger scope to return status if error
  let weatherData;
  const unitGroup = getSelectedUnits();
  const today = getTodaysDate();

  try {
    //get today date
    //get units
    //unit group is uk vs us for cel and far
    weatherData = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInput}/${today}?unitGroup=${unitGroup}&key=3LTVBASAQ7PVLZQWD6V4TN9MQ`
      // `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/54981/2024-12-09?unitGroup=uk&key=3LTVBASAQ7PVLZQWD6V4TN9MQ`
    );

    //test
    console.log(weatherData);

    const weatherJSON = await weatherData.json();

    //test
    console.log(weatherJSON);

    //need "if have currentConditions" else use days[0]
    const weatherResultsObject = {
      conditions: weatherJSON.currentConditions.conditions,
      temp: weatherJSON.currentConditions.temp,
    };

    return weatherResultsObject;
  } catch (err) {
    console.log(weatherData.status);
    // return "will fix i promise";
    throw err;
  }
}

// ====================================== Event Listeners ====================================== //

export function reportWeather() {
  const weatherJSON = getWeather(locationInputElm.value);
  weatherJSON.then(console.log);
}

// ====================================== Generic Functions ====================================== //

//returns "us" for Far and "uk" for Cel
function getSelectedUnits() {
  const selectedUnits = document.querySelector(
    "input[name='unit-input']:checked"
  ).value;

  return selectedUnits;
}

function getTodaysDate() {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  return formattedDate;
}

//no need for abstract?
// const getLocationInput = () => locationInputElm.value;
