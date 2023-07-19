const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather";
const GEOCODING_API = "http://api.openweathermap.org/geo/1.0/direct";

export const getWeather = async (lat, lon) => {
  try {
    const response = await fetch(
      `${WEATHER_API}?units=metric&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTemperature = async (city) => {
  try {
    const response = await fetch(
      `${GEOCODING_API}?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    const weather = await getWeather(data[0].lat, data[0].lon);
    const realTemperature = Math.round(weather.main.temp);
    return realTemperature;
  } catch (error) {
    console.log(error);
  }
};
