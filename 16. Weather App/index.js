var cityInput = document.getElementById("city-input");
let searchBtn = document.getElementById("searchBtn");
let icon = document.getElementById("icon");
let temp = document.getElementById("temp");
let weather = document.getElementById("weather");
let city = document.getElementById("city");
let weatherdetails = document.getElementById("weather-details");
let max_temp = document.getElementById("max");
let min_temp = document.getElementById("min");

searchBtn.addEventListener("click", () => {
  console.log("button clicked!!!");
  console.log(cityInput.value);
  getWeatherDetails(cityInput.value);
});

getWeatherDetails = async (city) => {
  const api = "Add you Api key here";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.name);
  updateWeatherDetails(data);
};

getWeatherDetails("Delhi");

updateWeatherDetails = (data) => {
  city.innerText = data.name || "Enter a valid city name";
  temp.innerText = data.main.temp;
  weather.innerText = data.weather[0].main;
  min_temp.innerText = data.main.temp_min;
  max_temp.innerText = data.main.temp_max;
  icon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
  cityInput.value = "";
};
