import { GET_CITY_NAME, GET_WEEK_WEATHER } from 'constants/actionNames';

import { call, takeLeading } from 'redux-saga/effects';
import { ActionType } from 'types/reduxTypes';
import { getCityNameWorker } from '../workers/getCityNameWorker';
import { getDailyWeatherWorker } from '../workers/getDailyWeatherWorker';
import { getWeekWeatherWorker } from '../workers/getWeekWeatherWorker';

function* getWeather(action: ActionType) {
  yield call(getWeekWeatherWorker, action as ActionType);
  yield call(getDailyWeatherWorker, action as ActionType);
}

export function* watchTownInputSaga() {
  yield takeLeading(GET_WEEK_WEATHER, getWeather);
  yield takeLeading(GET_CITY_NAME, getCityNameWorker);
}
