import { useAppSelector } from 'store';
import { weekWeatherSelector } from 'store/selectors';
import { getIconTypeVisualCrossing } from 'utils/getIconType';

import {
  Today,
  TodayIcon,
  TodayInfo,
  TodayTemperature,
  TodayWeatherLayout,
} from './styled';

export default function TodayWeather() {
  const { days } = useAppSelector(weekWeatherSelector);

  const { icon, temp } = days[0];

  return (
    <TodayWeatherLayout>
      <TodayIcon src={getIconTypeVisualCrossing(icon)} />
      <TodayInfo>
        <Today>TODAY</Today>
        <TodayTemperature>{Math.trunc(temp)}°</TodayTemperature>
      </TodayInfo>
    </TodayWeatherLayout>
  );
}
