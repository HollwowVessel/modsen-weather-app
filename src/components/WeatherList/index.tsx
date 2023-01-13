import { shallowEqual } from 'react-redux';
import {
  dailyWeatherDaysSelector,
  weatherErrorSelector,
  weekWeatherDaysSelector,
} from 'store/selectors';

import { WeatherItem } from '@/components/WeatherItem';
import { useAppSelector } from '@/store';
import { getDayOfWeek } from '@/utils/getDayOfWeek';
import {
  getIconTypeOpenWeather,
  getIconTypeVisualCrossing,
} from '@/utils/getIconType';
import { getTime } from '@/utils/getTime';

import { WeatherItems } from './styled';
import { WeatherListProps } from './types';

export function WeatherList({ type }: WeatherListProps) {
  const selector = !type ? weekWeatherDaysSelector : dailyWeatherDaysSelector;

  const getIconType = !type
    ? getIconTypeVisualCrossing
    : getIconTypeOpenWeather;

  const timeType = !type ? getDayOfWeek : getTime;

  const weatherItems = useAppSelector(selector, shallowEqual);

  const error = useAppSelector(weatherErrorSelector);

  return (
    <WeatherItems data-cy="weather-items">
      {!error
        ? weatherItems.map(({ icon, temp }, day) => (
            <WeatherItem
              icon={getIconType(icon)}
              temp={temp}
              day={timeType(day)}
              key={getDayOfWeek(day)}
            />
          ))
        : error}
    </WeatherItems>
  );
}
