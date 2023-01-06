import { WeatherDate } from 'components/WeatherDate';
import { calendarItems } from 'constants/calendarItem';
import { useEffect, useState } from 'react';
import { apiCalendar, config } from 'services/googleCalendar';
import { parseEvent } from 'utils/objectParsers';
import { CalendarItem, CalendarList, Layout, Time } from './styled';

export function InfoLayout() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [eventItems, setEventItems] = useState<any[]>([]);

  const handleSignIn = () => {
    apiCalendar.handleAuthClick();
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    apiCalendar.handleSignoutClick();
    setIsSignedIn(false);
  };

  useEffect(() => {
    apiCalendar.onLoadCallback = () => {
      window?.gapi.auth2.init(config).then(() => {
        const GoogleAuth = window.gapi.auth2.getAuthInstance();
        setIsSignedIn(GoogleAuth.isSignedIn.get());
      });
    };
  });

  const handleClick = () => {
    apiCalendar
      .listUpcomingEvents(4)
      .then(({ result }: any) => setEventItems(parseEvent(result.items)));
  };
  console.log(eventItems);
  return (
    <Layout>
      <div>
        <button onClick={handleSignIn}>
          {!isSignedIn ? 'Sign in' : 'Sign out'}
        </button>
        <button onClick={handleClick}>Get Events</button>
      </div>
      <WeatherDate />
      <CalendarList>
        {eventItems.map(({ start, summary }, id) => (
          <CalendarItem key={id}>
            <Time>{start}</Time> {summary}
          </CalendarItem>
        ))}
      </CalendarList>
    </Layout>
  );
}
