import { shallowEqual } from 'react-redux';

import { useAppSelector } from '@/store';
import { todaySelector, weatherErrorSelector } from '@/store/selectors';
import { getIconTypeVisualCrossing } from '@/utils/getIconType';

import {
  Today,
  TodayIcon,
  TodayInfo,
  TodayTemperature,
  TodayWeatherLayout,
} from './styled';

export function TodayWeather() {
  const { icon, temp } = useAppSelector(todaySelector, shallowEqual);

  const error = useAppSelector(weatherErrorSelector);

  return (
    <TodayWeatherLayout>
      {!error ? (
        <>
          <TodayIcon
            src={getIconTypeVisualCrossing(icon)}
            alt={icon}
            title={icon}
          />
          <TodayInfo>
            <Today>TODAY</Today>
            <TodayTemperature data-cy="today-temp">
              {Math.trunc(temp)}°
            </TodayTemperature>
          </TodayInfo>
        </>
      ) : (
        error
      )}
    </TodayWeatherLayout>
  );
}
