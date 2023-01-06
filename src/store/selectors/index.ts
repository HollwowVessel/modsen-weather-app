import { RootState } from 'store';

export const weekWeatherSelector = (state: any | RootState) =>
  state.weather.visualCrossingWeather;

export const dailyWeatherSelector = (state: any | RootState) =>
  state.weather.openWeather;

export const dailyWeatherDaysSelector = (state: any | RootState) =>
  state.weather.openWeather.days;

export const weekWeatherDaysSelector = (state: any | RootState) =>
  state.weather.visualCrossingWeather.days;
