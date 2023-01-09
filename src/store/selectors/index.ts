import { EventStateSelector, WeatherStateSelector } from 'types/reduxTypes';

export const weekWeatherSelector = (state: WeatherStateSelector) =>
  state.weather.visualCrossingWeather;

export const dailyWeatherSelector = (state: WeatherStateSelector) =>
  state.weather.openWeather;

export const dailyWeatherDaysSelector = (state: WeatherStateSelector) =>
  state.weather.openWeather.days;

export const weekWeatherDaysSelector = (state: WeatherStateSelector) =>
  state.weather.visualCrossingWeather.days;

export const dailyEventsSelector = (state: EventStateSelector) =>
  state.event.dailyEvents;

export const weatherErrorSelector = (state: WeatherStateSelector) =>
  state.weather.error;
export const eventErrorSelector = (state: EventStateSelector) =>
  state.event.error;
