import React from 'react';
import { DateContainer, DateInfo, TimeInfo } from './styled';

export function WeatherDate() {
  return (
    <DateContainer>
      <TimeInfo>12:30 pm</TimeInfo>
      <DateInfo>Monday, 2 February 2015</DateInfo>
    </DateContainer>
  );
}
