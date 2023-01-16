import { visualCrossingKey } from '@/constants/apiKeys';
import { getWeekWeatherLink } from '@/constants/links';

export const getWeekWeatherApi = async (town: string) => {
  const res = await fetch(
    `${getWeekWeatherLink}/${town}?unitGroup=metric&key=${visualCrossingKey}&contentType=json`
  );

  return res.json();
};
