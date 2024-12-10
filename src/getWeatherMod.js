//getWeatherMod.js

//imports

//declarations

// ====================================== Major Functions ====================================== //

export async function getWeather(locationInput) {
  //declare in larger scope to return status (if error)
  let weatherData;
  let weatherResultsObject = {};

  const unitGroup = getSelectedUnits();
  const today = getTodaysDate();

  try {
    //using free api
    weatherData = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInput}/${today}?unitGroup=${unitGroup}&key=3LTVBASAQ7PVLZQWD6V4TN9MQ`
    );
    const weatherJSON = await weatherData.json();

    //test
    console.log(weatherData);
    console.log(weatherJSON);

    //not all locations have "currentConditions" prop, use days[0] if so
    if (!weatherJSON.currentConditions) {
      weatherResultsObject = {
        conditions: weatherJSON.days[0].conditions,
        temp: weatherJSON.days[0].temp,
        resolvedAddress: weatherJSON.resolvedAddress,
        unitGroup: unitGroup,
      };
    } else {
      weatherResultsObject = {
        conditions: weatherJSON.currentConditions.conditions,
        temp: weatherJSON.currentConditions.temp,
        resolvedAddress: weatherJSON.resolvedAddress,
        unitGroup: unitGroup,
      };
    }

    return weatherResultsObject;
  } catch (err) {
    //needs work
    console.log(weatherData.status);
    // throw err;
    //return err means handling error outside of catch (needed because splitting getWeather and renderWeather?)
    //return status also?
    return err;
  }
}

// ====================================== Event Listeners ====================================== //

//needs run through renderMod?
export function reportWeather() {
  const searchInput = getLocationInput();
  // const weatherObj = getWeather(searchInput);
  weatherObj.then(console.log);
}

// ====================================== Lesser Functions ====================================== //

//returns "us" for Far and "uk" for Cel
function getSelectedUnits() {
  //values set in html
  const selectedUnits = document.querySelector(
    "input[name='unit-input']:checked"
  ).value;

  return selectedUnits;
}

function getTodaysDate() {
  const today = new Date();
  //   console.log(today.toISOString());
  const formattedDate = today.toISOString().split("T")[0];
  return formattedDate;
}
