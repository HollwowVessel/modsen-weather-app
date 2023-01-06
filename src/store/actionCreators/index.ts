import {
  GET_CITY_NAME,
  GET_WEEK_WEATHER,
  SET_DAILY_WEATHER,
  SET_WEEK_WEATHER,
} from 'constants/actionNames';
import { DailyWeather } from 'types/openWeatherTypes';
import { visualCrossingData } from 'types/visualCrossingTypes';

export const setWeekWeather = (data: visualCrossingData) => ({
  type: SET_WEEK_WEATHER,
  payload: data,
});

export const getWeekWeather = (town: string) => ({
  type: GET_WEEK_WEATHER,
  payload: town,
});

export const getCityName = (coord: { lat: number; lon: number }) => ({
  type: GET_CITY_NAME,
  payload: coord,
});

export const setDailyWeather = (data: DailyWeather) => ({
  type: SET_DAILY_WEATHER,
  payload: data,
});
