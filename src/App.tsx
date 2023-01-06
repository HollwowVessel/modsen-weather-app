import { theme } from 'constants/theme';
import { WeatherContainer } from 'containers/WeatherContainer';
import { GlobalStyles } from 'GlobalStyles';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { getLocationOfUser } from 'utils/getLocationOfUser';
import { useAppDispatch } from 'store';
import { getCityName } from 'store/actionCreators';
import { apiCalendar } from 'services/googleCalendar';

function App() {
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
      <GlobalStyles />
      <WeatherContainer />
    </ThemeProvider>
  );
}

export default App;
