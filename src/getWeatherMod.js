//getWeatherMod.js

// ====================================== Declarations ====================================== //
const locationInputElm = document.querySelector("#location-input");

// ====================================== Major Functions ====================================== //

// ====================================== Generic Functions ====================================== //

//need learn location api
//unit group is uk vs us for cel and far
async function getWeather(locationInput) {
  //declare in larger scope to return status if error
  let weatherData;

  try {
    //get today date
    //get units
    weatherData = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInput}/2024-12-09?unitGroup=us&key=3LTVBASAQ7PVLZQWD6V4TN9MQ`
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

const getLocationInput = () => locationInputElm.value;

searchWeatherBtn.addEventListener("click", (event) => {
  //stop form submit
  event.preventDefault();

  const weatherJSON = getWeather(getLocationInput());
  weatherJSON.then(console.log);
});
