import { getDayOfWeek } from 'utils/getDayOfWeek';
import {
  DailyIcon,
  DailyTemperature,
  DayOfWeek,
  ItemContainer,
} from './styled';

interface WeatherItemProps {
  icon: string;
  temp: number;
  day: number;
}

export default function WeatherItem({ icon, temp, day }: WeatherItemProps) {
  return (
    <ItemContainer>
      <DayOfWeek>{getDayOfWeek(day)}</DayOfWeek>
      <DailyIcon
        src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/2nd%20Set%20-%20Color/${icon}.svg`}
      />
      <DailyTemperature>{Math?.trunc(temp)} °</DailyTemperature>
    </ItemContainer>
  );
}
