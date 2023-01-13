import { useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';

import { getDailyEvents } from '@/actions';
import { apiCalendar, config } from '@/api/googleCalendar';
import { WeatherDate } from '@/components/WeatherDate';
import { useAppDispatch, useAppSelector } from '@/store';
import { dailyEventsSelector } from '@/store/selectors';
import { GoogleAuthType } from '@/types/eventTypes';

import {
  ButtonContainer,
  CalendarItem,
  CalendarList,
  EventsButton,
  Layout,
  LoginButton,
  Summary,
  Time,
} from './styled';

export function InfoLayout() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const dispatch = useAppDispatch();
  const { eventItems, error } = useAppSelector(
    dailyEventsSelector,
    shallowEqual
  );

  const handleAccount = () => {
    if (isSignedIn) {
      apiCalendar.handleSignoutClick();
      setIsSignedIn(false);
    } else {
      apiCalendar.handleAuthClick();
      setIsSignedIn(true);
    }
  };

  useEffect(() => {
    apiCalendar.onLoadCallback = () => {
      window.gapi.auth2.init(config).then(() => {
        const GoogleAuth = window.gapi.auth2.getAuthInstance();
        setIsSignedIn((GoogleAuth as GoogleAuthType).isSignedIn.get());
      });
    };
  });

  const handleClick = () => {
    dispatch(getDailyEvents());
  };

  return (
    <Layout>
      <ButtonContainer>
        <LoginButton onClick={handleAccount}>
          {!isSignedIn ? 'Sign in' : 'Sign out'}
        </LoginButton>
        {isSignedIn && (
          <EventsButton onClick={handleClick}>Get Events</EventsButton>
        )}
      </ButtonContainer>
      <WeatherDate />
      <CalendarList>
        {!error
          ? eventItems?.map(({ start, summary }, id) => (
              <CalendarItem key={id}>
                <Time>{start as string}</Time>
                <Summary>{summary}</Summary>
              </CalendarItem>
            ))
          : error}
      </CalendarList>
    </Layout>
  );
}
