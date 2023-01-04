import React from 'react';
import {
  DailyIcon,
  DailyTemperature,
  DayOfWeek,
  WeatherItem,
  WeatherItems,
} from './styled';

export default function WeatherList() {
  return (
    <WeatherItems>
      <WeatherItem>
        <DayOfWeek>TUE</DayOfWeek>
        <DailyIcon />
        <DailyTemperature>12 °</DailyTemperature>
      </WeatherItem>
    </WeatherItems>
  );
}
