import { GET_WEEK_WEATHER, SET_WEEK_WEATHER } from 'constants/actionNames';
import { visualCrossingData } from 'types/vissualCrossing';

export const setWeekWeather = (data: visualCrossingData) => ({
  type: SET_WEEK_WEATHER,
  payload: data,
});

export const getWeekWeather = (town: string) => ({
  type: GET_WEEK_WEATHER,
  payload: town,
});
