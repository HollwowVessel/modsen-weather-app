import { shallowEqual } from 'react-redux';
import { useAppSelector } from 'store';
import { weatherErrorSelector, weekWeatherSelector } from 'store/selectors';
import { getIconTypeVisualCrossing } from 'utils/getIconType';

import {
  Today,
  TodayIcon,
  TodayInfo,
  TodayTemperature,
  TodayWeatherLayout,
} from './styled';

export default function TodayWeather() {
  const { days } = useAppSelector(weekWeatherSelector, shallowEqual);

  const error = useAppSelector(weatherErrorSelector);

  const { icon, temp } = days[0];

  return (
    <TodayWeatherLayout>
      {!error ? (
        <>
          <TodayIcon src={getIconTypeVisualCrossing(icon)} />
          <TodayInfo>
            <Today>TODAY</Today>
            <TodayTemperature>{Math.trunc(temp)}°</TodayTemperature>
          </TodayInfo>{' '}
        </>
      ) : (
        error
      )}
    </TodayWeatherLayout>
  );
}
