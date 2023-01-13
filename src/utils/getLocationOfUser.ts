import { Dispatch, SetStateAction } from 'react';

import { ReverseGeocodingCoords } from '@/types/openWeatherTypes';

const error = () => console.log('Doesnt get info about location :(((');
const options = {
  enableHighAccuracy: true,
};

export const getLocationOfUser = (
  setCoord: Dispatch<SetStateAction<ReverseGeocodingCoords>>
) => {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      setCoord({ lat: latitude, lon: longitude });
    },
    error,
    options
  );
};
