import { useSelector } from 'react-redux';
import { visualCrossingDay } from 'types/vissualCrossing';
import {
  Today,
  TodayIcon,
  TodayInfo,
  TodayTemperature,
  TodayWeatherLayout,
} from './styled';

export default function TodayWeather() {
  const { days }: visualCrossingDay[] | null = useSelector(
    (state) => state.weekWeather.weather
  );
  if (!days) return null;

  const { icon, temp } = days[0];

  return (
    <TodayWeatherLayout>
      <TodayIcon
        src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/1st%20Set%20-%20Color/${icon}.svg`}
      />
      <TodayInfo>
        <Today>TODAY</Today>
        <TodayTemperature>{Math.trunc(temp)} °</TodayTemperature>
      </TodayInfo>
    </TodayWeatherLayout>
  );
}
