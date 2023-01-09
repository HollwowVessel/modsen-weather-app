import { WeatherMenu } from 'components/WeatherMenu';
import { InfoContainer } from 'containers/InfoContainer';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from 'store';
import { weekWeatherSelector } from 'store/selectors';
import { getBackgroundImage } from 'utils/getBackgroundImage';
import { Container } from './styled';

export function WeatherContainer() {
  const { days } = useAppSelector(weekWeatherSelector, shallowEqual);

  const { icon } = days[0];

  const type = getBackgroundImage(icon);
  return (
    <Container background={type}>
      <InfoContainer />
      <WeatherMenu />
    </Container>
  );
}
