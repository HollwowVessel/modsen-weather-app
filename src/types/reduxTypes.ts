import { visualCrossingData } from './visualCrossingTypes';

export type ActionType = {
  type: string;
  payload: unknown;
};

export interface WeekWeatherState {
  visualCrossingWeather: visualCrossingData;
  openWeather: unknown[];
}
