import { useEffect } from 'react';

import { catchWeather, getCityName, setLoad } from '@/actions';
import { useAppDispatch } from '@/store';

export const useGetLocation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        dispatch(setLoad());
        dispatch(getCityName({ lat: latitude, lon: longitude }));
      },
      () => dispatch(catchWeather()),
      {
        enableHighAccuracy: true,
      }
    );
  }, []);
};
