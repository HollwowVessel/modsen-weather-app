import { WeatherDate } from 'components/WeatherDate';
import { calendarItems } from 'constants/calendarItem';
import { CalendarItem, CalendarList, Layout, Time } from './styled';

export function InfoLayout() {
  return (
    <Layout>
      <WeatherDate />
      <CalendarList>
        {calendarItems.map(({ time, text }, id) => (
          <CalendarItem key={id}>
            <Time>{time}</Time> {text}
          </CalendarItem>
        ))}
      </CalendarList>
    </Layout>
  );
}
