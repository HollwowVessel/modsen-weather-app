import TodayWeather from 'components/TodayWeather';
import WeatherList from 'components/WeatherList';
import { weatherMenuItems } from 'constants/weatherMenuItems';
import { useEffect, useState } from 'react';
import { apiCalendar, config } from 'services/googleCalendar';
import { getBackgroundType } from 'utils/getBackgroundType';

import { Nav, NavItem, WeatherInfo } from './styled';

export function WeatherMenu() {
  const [active, setActive] = useState(0);

  const handleActive = (val: number) => () => {
    setActive(val);
  };

  return (
    <WeatherInfo>
      <Nav>
        {weatherMenuItems.map((el: string, id: number) => (
          <NavItem
            background={getBackgroundType(active, id)}
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
