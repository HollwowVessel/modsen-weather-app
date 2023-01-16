import { shallowEqual } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { WeatherContainer } from '@/containers/WeatherContainer';
import { useGetLocation } from '@/hooks/useGetLocation';
import { useAppSelector } from '@/store';
import { GlobalStyles } from '@/theme/GlobalStyles';
import { theme } from '@/theme/theme';

import { Spinner, SpinnerContainer } from './styled';

export function App() {
  const { loading, url } = useAppSelector(
    (state) => state.helper,
    shallowEqual
  );

  useGetLocation();

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles background={url} />
      <WeatherContainer />
    </ThemeProvider>
  );
}
