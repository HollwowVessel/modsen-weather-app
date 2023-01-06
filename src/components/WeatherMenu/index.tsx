import TodayWeather from 'components/TodayWeather';
import WeatherList from 'components/WeatherList';
import { weatherMenuItems } from 'constants/weatherMenuItems';
import { useState } from 'react';

import { Nav, NavItem, WeatherInfo } from './styled';

export function WeatherMenu() {
  const [active, setActive] = useState(0);

  const handleActive = (val: number) => () => {
    setActive(val);
  };
  const background = (active: number, id: number) =>
    active === id ? '#000' : '';

  return (
    <WeatherInfo>
      <Nav>
        {weatherMenuItems.map((el: string, id: number) => (
          <NavItem
            background={background(active, id)}
            onClick={handleActive(id)}
            key={id}>
            {el}
          </NavItem>
        ))}
      </Nav>
      <TodayWeather />
      <WeatherList type={active} />
    </WeatherInfo>
  );
}
