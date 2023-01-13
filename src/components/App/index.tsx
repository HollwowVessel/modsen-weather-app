import { useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { getCityName } from '@/actions';
import { theme } from '@/constants/theme';
import { WeatherContainer } from '@/containers/WeatherContainer';
import { useAppDispatch, useAppSelector } from '@/store';
import { sourceTypeSelector } from '@/store/selectors';
import { ReverseGeocodingCoords } from '@/types/openWeatherTypes';
import { getLocationOfUser } from '@/utils/getLocationOfUser';

import { GlobalStyles } from './GlobalStyles';

export function App() {
  const type = useAppSelector(sourceTypeSelector, shallowEqual);

  const [coords, setCoords] = useState<ReverseGeocodingCoords>({
    lat: 0,
    lon: 0,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    getLocationOfUser(setCoords);
    const { lat, lon } = coords;
    if (lat || lon) {
      dispatch(getCityName({ lat, lon }));
    }
  }, [coords.lat, coords.lon]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles background={type} />
      <WeatherContainer />
    </ThemeProvider>
  );
}
