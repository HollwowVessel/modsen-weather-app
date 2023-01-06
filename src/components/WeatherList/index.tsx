import WeatherItem from 'components/WeatherItem';
import { visualCrossingDay } from 'types/visualCrossingTypes';

import { weekWeatherSelector } from 'store/selectors';
import { useAppSelector } from 'store';
import { WeatherItems } from './styled';

export default function WeatherList({ type }: { type: number }) {
  const { days } = useAppSelector(weekWeatherSelector);

  return (
    <WeatherItems>
      {days
        ?.slice(0, 7)
        .map(({ icon, temp }: visualCrossingDay, day: number) => (
          <WeatherItem icon={icon} temp={temp} day={day} />
        ))}
    </WeatherItems>
  );
}
