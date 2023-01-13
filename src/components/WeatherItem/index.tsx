import { memo } from 'react';

import {
  DailyIcon,
  DailyTemperature,
  DayOfWeek,
  ItemContainer,
} from './styled';
import { WeatherItemProps } from './types';

function Item({ icon, temp, day }: WeatherItemProps) {
  return (
    <ItemContainer>
      <DayOfWeek data-cy="day-of-week">{day}</DayOfWeek>
      <DailyIcon src={icon} title={icon} alt={icon} />
      <DailyTemperature data-cy="daily-temp">
        {Math?.trunc(temp)}°
      </DailyTemperature>
    </ItemContainer>
  );
}

export const WeatherItem = memo(Item);
