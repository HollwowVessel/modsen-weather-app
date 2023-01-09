import { WeatherDate } from 'components/WeatherDate';

import { useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { apiCalendar, config } from 'services/googleCalendar';
import { useAppDispatch, useAppSelector } from 'store';
import { getDailyEvents } from 'store/actionCreators';
import { dailyEventsSelector, eventErrorSelector } from 'store/selectors';
import { Event, Gapi, GoogleAuthType } from 'types/eventTypes';

import {
  CalendarItem,
  CalendarList,
  EventsButton,
  Layout,
  LoginButton,
  Time,
} from './styled';

export function InfoLayout() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const dispatch = useAppDispatch();
  const eventItems = useAppSelector(dailyEventsSelector, shallowEqual) || [];

  const error = useAppSelector(eventErrorSelector);

  const handleAccount = () => {
    const handleSignIn = () => {
      apiCalendar.handleAuthClick();
      setIsSignedIn(true);
    };

    const handleSignOut = () => {
      apiCalendar.handleSignoutClick();
      setIsSignedIn(false);
    };

    if (isSignedIn) {
      handleSignOut();
    } else {
      handleSignIn();
    }
  };

  useEffect(() => {
    apiCalendar.onLoadCallback = () => {
      if ('gapi' in window && window.gapi) {
        (window.gapi as Gapi).auth2.init(config).then(() => {
          if ('gapi' in window && window.gapi) {
            const GoogleAuth = (window.gapi as Gapi).auth2.getAuthInstance();
            setIsSignedIn((GoogleAuth as GoogleAuthType).isSignedIn.get());
          }
        });
      }
    };
  });

  const handleClick = () => {
    dispatch(getDailyEvents());
  };

  return (
    <Layout>
      <LoginButton onClick={handleAccount}>
        {!isSignedIn ? 'Sign in' : 'Sign out'}
      </LoginButton>
      {isSignedIn && (
        <EventsButton onClick={handleClick}>Get Events</EventsButton>
      )}
      <WeatherDate />
      <CalendarList>
        {!error
          ? eventItems?.map(({ start, summary }: Event, id: number) => (
              <CalendarItem key={id}>
                <Time>{start as string}</Time> {summary}
              </CalendarItem>
            ))
          : error}
      </CalendarList>
    </Layout>
  );
}
