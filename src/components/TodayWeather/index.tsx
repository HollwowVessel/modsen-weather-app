import React from 'react';
import {
  Today,
  TodayIcon,
  TodayInfo,
  TodayTemperature,
  TodayWeatherLayout,
} from './styled';

export default function TodayWeather() {
  return (
    <TodayWeatherLayout>
      <TodayIcon />
      <TodayInfo>
        <Today>TODAY</Today>
        <TodayTemperature>12 °</TodayTemperature>
      </TodayInfo>
    </TodayWeatherLayout>
  );
}
