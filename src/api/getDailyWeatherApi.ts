import { DailyWeather } from 'types/openWeatherTypes';

export const getDailyWeatherApi = async (town: string) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${town}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
  );

  return res.json();
};
