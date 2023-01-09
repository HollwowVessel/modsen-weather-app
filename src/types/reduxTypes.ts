import { Event } from './eventTypes';
import { DailyWeather } from './openWeatherTypes';
import { visualCrossingData } from './visualCrossingTypes';

export type ActionType = {
  type: string;
  payload?: unknown;
};

export interface WeatherState {
  visualCrossingWeather: visualCrossingData;
  openWeather: DailyWeather;
  error: string;
}

export interface WeatherStateSelector {
  weather: WeatherState;
}

export interface EventState {
  dailyEvents: Event[];
  error: string;
}

export interface EventStateSelector {
  event: EventState;
}
