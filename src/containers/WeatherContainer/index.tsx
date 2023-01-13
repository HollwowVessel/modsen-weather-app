import { useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';

import { WeatherMenu } from '@/components/WeatherMenu';
import { InfoContainer } from '@/containers/InfoContainer';
import { useAppSelector } from '@/store';
import { sourceTypeSelector } from '@/store/selectors';

import { Container, Spinner, SpinnerContainer } from './styled';

export function WeatherContainer() {
  const icon = useAppSelector(sourceTypeSelector, shallowEqual);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 1000);
  }, []);

  return loading ? (
    <Container background={icon}>
      <InfoContainer />
      <WeatherMenu />
    </Container>
  ) : (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
}
