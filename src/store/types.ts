import { Event } from '@/types/eventTypes';
import { DailyWeather } from '@/types/openWeatherTypes';
import { visualCrossingData } from '@/types/visualCrossingTypes';

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

export type ActionType = {
  type: string;
  payload?: unknown;
};

export type HelpState = {
  spinner: boolean;
  popup: boolean;
};
