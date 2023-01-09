import {
  DailyIcon,
  DailyTemperature,
  DayOfWeek,
  ItemContainer,
} from './styled';
import { WeatherItemProps } from './types';

export default function WeatherItem({ icon, temp, day }: WeatherItemProps) {
  return (
    <ItemContainer>
      <DayOfWeek data-cy="day-of-week">{day}</DayOfWeek>
      <DailyIcon src={icon} />
      <DailyTemperature data-cy="daily-temp">
        {Math?.trunc(temp)}°
      </DailyTemperature>
    </ItemContainer>
  );
}
