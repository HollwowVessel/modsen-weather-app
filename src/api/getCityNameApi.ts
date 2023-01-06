import { ReverseGeocodingCoords } from 'types/openWeatherTypes';

export const getCityNameApi = async ({ lat, lon }: ReverseGeocodingCoords) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
  );

  return res.json();
};
