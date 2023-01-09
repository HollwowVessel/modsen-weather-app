import { theme } from 'constants/theme';
import { WeatherContainer } from 'containers/WeatherContainer';
import { GlobalStyles } from 'GlobalStyles';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { getLocationOfUser } from 'utils/getLocationOfUser';
import { useAppDispatch, useAppSelector } from 'store';
import { getCityName } from 'store/actionCreators';
import { weekWeatherSelector } from 'store/selectors';
import { shallowEqual } from 'react-redux';
import { getBackgroundImage } from 'utils/getBackgroundImage';

function App() {
  const { days } = useAppSelector(weekWeatherSelector, shallowEqual);

  const { icon } = days[0];

  const type = getBackgroundImage(icon);

  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    getLocationOfUser(setLat, setLon);
    if (lat || lon) {
      dispatch(getCityName({ lat, lon }));
    }
  }, [lat, lon]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles background={type} />
      <WeatherContainer />
    </ThemeProvider>
  );
}

export default App;
