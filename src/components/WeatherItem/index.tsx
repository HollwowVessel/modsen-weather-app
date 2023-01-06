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
      <DayOfWeek>{day}</DayOfWeek>
      <DailyIcon src={icon} />
      <DailyTemperature>{Math?.trunc(temp)}°</DailyTemperature>
    </ItemContainer>
  );
}
