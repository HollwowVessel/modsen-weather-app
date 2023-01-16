import { useState } from 'react';

import { TodayWeather } from '@/components/TodayWeather';
import { WeatherList } from '@/components/WeatherList';
import { weatherMenuItems } from '@/constants/weatherMenuItems';
import { theme } from '@/theme/theme';

import { Item, TimeType, WeatherInfo } from './styled';

export function WeatherMenu() {
  const [active, setActive] = useState(0);

  const handleActive = (val: number) => () => {
    setActive(val);
  };

  return (
    <WeatherInfo>
      <TimeType>
        {weatherMenuItems.map((el, id) => (
          <Item
            background={id === active ? theme.colors.black : 'transparent'}
            onClick={handleActive(id)}
            key={id}
            data-cy={el}
          >
            {el}
          </Item>
        ))}
      </TimeType>
      <TodayWeather />
      <WeatherList type={active} />
    </WeatherInfo>
  );
}
