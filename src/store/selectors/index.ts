import { RootState } from 'store';

export const weekWeatherSelector = (state: any | RootState) =>
  state.weather.visualCrossingWeather;
