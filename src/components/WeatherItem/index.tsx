import { getDayOfWeek } from 'utils/getDayOfWeek';
import { getIconType } from 'utils/getIconType';
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
      <DayOfWeek>{getDayOfWeek(day)}</DayOfWeek>
      <DailyIcon src={getIconType(icon)} />
      <DailyTemperature>{Math?.trunc(temp)}°</DailyTemperature>
    </ItemContainer>
  );
}
