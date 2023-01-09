import {
  CATCH_DAILY_EVENTS,
  CATCH_WEATHER,
  GET_CITY_NAME,
  GET_DAILY_EVENTS,
  GET_WEATHER,
  SET_DAILY_EVENTS,
  SET_DAILY_WEATHER,
  SET_WEEK_WEATHER,
} from 'constants/actionNames';
import { DailyWeather } from 'types/openWeatherTypes';
import { visualCrossingData } from 'types/visualCrossingTypes';

export const getWeather = (town: string) => ({
  type: GET_WEATHER,
  payload: town,
});

export const setWeekWeather = (data: visualCrossingData) => ({
  type: SET_WEEK_WEATHER,
  payload: data,
});

export const catchWeather = () => ({
  type: CATCH_WEATHER,
});

export const getCityName = (coord: { lat: number; lon: number }) => ({
  type: GET_CITY_NAME,
  payload: coord,
});

export const setDailyWeather = (data: DailyWeather) => ({
  type: SET_DAILY_WEATHER,
  payload: data,
});

export const getDailyEvents = () => ({ type: GET_DAILY_EVENTS });

export const setDailyEvents = (data: any) => ({
  type: SET_DAILY_EVENTS,
  payload: data,
});

export const catchDailyEvents = () => ({ type: CATCH_DAILY_EVENTS });
