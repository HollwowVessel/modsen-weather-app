import { shallowEqual } from 'react-redux';

import { WeatherMenu } from '@/components/WeatherMenu';
import { InfoContainer } from '@/containers/InfoContainer';
import { useAppSelector } from '@/store';
import { sourceTypeSelector } from '@/store/selectors';

import { Container } from './styled';

export function WeatherContainer() {
  const icon = useAppSelector(sourceTypeSelector, shallowEqual);

  return (
    <Container background={icon}>
      <InfoContainer />
      <WeatherMenu />
    </Container>
  );
}
