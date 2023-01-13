import { EventStateSelector, WeatherStateSelector } from '@/store/types';

export const weekWeatherSelector = (state: WeatherStateSelector) =>
  state.weather.visualCrossingWeather;

export const dailyWeatherSelector = (state: WeatherStateSelector) =>
  state.weather.openWeather;

export const dailyWeatherDaysSelector = (state: WeatherStateSelector) =>
  state.weather.openWeather.days;

export const weekWeatherDaysSelector = (state: WeatherStateSelector) =>
  state.weather.visualCrossingWeather.days;

export const weatherErrorSelector = (state: WeatherStateSelector) =>
  state.weather.error;

export const eventErrorSelector = (state: EventStateSelector) =>
  state.event.error;

export const sourceTypeSelector = (state: WeatherStateSelector) =>
  `https://source.unsplash.com/1920x1080/?${state.weather.visualCrossingWeather.days[0].icon}`;

export const todaySelector = (state: WeatherStateSelector) =>
  state.weather.visualCrossingWeather.days[0];

export const dailyEventsSelector = (state: EventStateSelector) => ({
  eventItems: state.event.dailyEvents,
  error: state.event.error,
});
