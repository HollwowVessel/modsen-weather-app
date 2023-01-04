import { theme } from 'constants/theme';
import { WeatherContainer } from 'containers/WeatherContainer';
import { GlobalStyles } from 'GlobalStyles';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <WeatherContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
