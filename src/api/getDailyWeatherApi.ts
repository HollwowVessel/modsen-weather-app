import { openWeatherKey } from 'constants/apiKeys';
import { getDailyWeatherLink } from 'constants/links';

export const getDailyWeatherApi = async (town: string) => {
  const res = await fetch(
    `${getDailyWeatherLink}/forecast?q=${town}&units=metric&appid=${openWeatherKey}`
  );

  return res.json();
};
