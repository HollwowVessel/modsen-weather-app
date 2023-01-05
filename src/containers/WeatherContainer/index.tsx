import { WeatherMenu } from 'components/WeatherMenu';
import { InfoContainer } from 'containers/InfoContainer';
import { Container, Layout } from './styled';

export function WeatherContainer() {
  return (
    <Container>
      <InfoContainer />
      <WeatherMenu />
    </Container>
  );
}
