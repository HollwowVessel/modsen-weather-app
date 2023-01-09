import { openWeatherKey } from 'constants/apiKeys';
import { getCityLink } from 'constants/links';
import { ReverseGeocodingCoords } from 'types/openWeatherTypes';

export const getCityNameApi = async ({ lat, lon }: ReverseGeocodingCoords) => {
  const res = await fetch(
    `${getCityLink}/weather?lat=${lat}&lon=${lon}&appid=${openWeatherKey}`
  );

  return res.json();
};
