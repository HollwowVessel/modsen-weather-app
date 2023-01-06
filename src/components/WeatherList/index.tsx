import WeatherItem from 'components/WeatherItem';
import { visualCrossingDay } from 'types/visualCrossingTypes';

import {
  dailyWeatherDaysSelector,
  weekWeatherDaysSelector,
} from 'store/selectors';
import { useAppSelector } from 'store';
import {
  getIconTypeOpenWeather,
  getIconTypeVisualCrossing,
} from 'utils/getIconType';
import { getDayOfWeek } from 'utils/getDayOfWeek';
import { getTime } from 'utils/getTime';
import { WeatherItems } from './styled';

export default function WeatherList({ type }: { type: number }) {
  const selector = !type ? weekWeatherDaysSelector : dailyWeatherDaysSelector;

  const weatherItems = useAppSelector(selector);

  const getIconType = !type
    ? getIconTypeVisualCrossing
    : getIconTypeOpenWeather;

  const timeType = !type ? getDayOfWeek : getTime;

  return (
    <WeatherItems>
      {weatherItems
        ?.slice(0, 7)
        .map(({ icon, temp }: visualCrossingDay, day: number) => (
          <WeatherItem
            icon={getIconType(icon)}
            temp={temp}
            day={timeType(day)}
            key={getDayOfWeek(day)}
          />
        ))}
    </WeatherItems>
  );
}
