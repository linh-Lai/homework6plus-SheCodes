let today = new Date();
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = weekdays[today.getDay()];
let time = today.getHours() + ":" + today.getMinutes();
let period = day + " " + time;
document.getElementById("update").innerHTML = period;




function callLocation(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let newCity = document.querySelector("#city");
  if (cityInput.value) {
    newCity.innerHTML = `${cityInput.value}`;
    searchCity(cityInput.value);
  } else {
    newCity.innerHTML = null;
    alert("Please input the city!");
  }
}

function searchCity(city) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d6ff37a4c170f249f41b8f3e7f2c9d0a`;
  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", callLocation);

searchCity("Hanoi");

function showTemperature(response) {
  console.log(response.data);
  let temperature = document.querySelector("#temperature");
  let temperatureElement = Math.round(response.data.main.temp);
  temperature.innerHTML = `${temperatureElement}°C`;
  let newCity = document.querySelector("#city");
  newCity.innerHTML = response.data.name;
}
