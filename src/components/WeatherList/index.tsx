import WeatherItem from 'components/WeatherItem';
import { visualCrossingDay } from 'types/vissualCrossing';
import { useSelector } from 'react-redux';
import { WeatherItems } from './styled';

export default function WeatherList() {
  const { days } = useSelector((state) => state.weekWeather.weather);

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
