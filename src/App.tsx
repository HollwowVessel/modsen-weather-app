import { theme } from 'constants/theme';
import { WeatherContainer } from 'containers/WeatherContainer';
import { GlobalStyles } from 'GlobalStyles';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <WeatherContainer />
    </ThemeProvider>
  );
}

export default App;
