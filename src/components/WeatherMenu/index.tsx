import TodayWeather from 'components/TodayWeather';
import WeatherList from 'components/WeatherList';
import React from 'react';
import { WeatherInfo } from './styled';

export function WeatherMenu() {
  return (
    <WeatherInfo>
      <TodayWeather />
      <WeatherList />
    </WeatherInfo>
  );
}
