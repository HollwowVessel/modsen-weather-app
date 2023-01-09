import { WeatherMenu } from 'components/WeatherMenu';
import { InfoContainer } from 'containers/InfoContainer';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from 'store';
import { weekWeatherSelector } from 'store/selectors';
import { Container } from './styled';

export function WeatherContainer() {
  const { days } = useAppSelector(weekWeatherSelector, shallowEqual);

  const { icon } = days[0];

  const type = `https://source.unsplash.com/1600x900/?${icon}`;
  return (
    <Container background={type}>
      <InfoContainer />
      <WeatherMenu />
    </Container>
  );
}
