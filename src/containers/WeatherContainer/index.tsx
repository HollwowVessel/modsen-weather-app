import { InfoLayout } from 'components/DateLayout';
import TownInput from 'components/TownInput';
import { WeatherMenu } from 'components/WeatherMenu';
import { Container, Layout } from './styled';

export function WeatherContainer() {
  return (
    <Container>
      <Layout>
        <InfoLayout />
        <TownInput />
      </Layout>
      <WeatherMenu />
    </Container>
  );
}
