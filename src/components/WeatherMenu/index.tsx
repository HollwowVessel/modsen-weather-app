import TodayWeather from 'components/TodayWeather';
import WeatherList from 'components/WeatherList';
import { useState } from 'react';
import { Nav, NavItem, WeatherInfo } from './styled';

export function WeatherMenu() {
  const [active, setActive] = useState(0);

  const handleActive = (val: number) => () => {
    setActive(val);
  };

  const mock = ['VisualCrossing', 'OpenWeather'];

  return (
    <WeatherInfo>
      <Nav>
        {mock.map((el: string, id: number) => (
          <NavItem onClick={handleActive(id)}>{el}</NavItem>
        ))}
      </Nav>
      <TodayWeather />
      <WeatherList type={active} />
    </WeatherInfo>
  );
}
