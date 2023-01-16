import { actionNames } from '@/constants/actionNames';
import { Event } from '@/types/eventTypes';
import { DailyWeather } from '@/types/openWeatherTypes';
import { visualCrossingData } from '@/types/visualCrossingTypes';

export const getWeather = (town: string) => ({
  type: actionNames.GET_WEATHER,
  payload: town,
});

export const setWeekWeather = (data: visualCrossingData) => ({
  type: actionNames.SET_WEEK_WEATHER,
  payload: data,
});

export const catchWeather = () => ({
  type: actionNames.CATCH_WEATHER,
});

export const getCityName = (coord: { lat: number; lon: number }) => ({
  type: actionNames.GET_CITY_NAME,
  payload: coord,
});

export const setDailyWeather = (data: DailyWeather) => ({
  type: actionNames.SET_DAILY_WEATHER,
  payload: data,
});

export const getDailyEvents = () => ({ type: actionNames.GET_DAILY_EVENTS });

export const setDailyEvents = (data: Event) => ({
  type: actionNames.SET_DAILY_EVENTS,
  payload: data,
});

export const catchDailyEvents = () => ({
  type: actionNames.CATCH_DAILY_EVENTS,
});

export const setImage = (img: string) => ({
  type: actionNames.SET_IMAGE,
  payload: img,
});

export const setLoad = () => ({
  type: actionNames.SET_LOAD,
});
