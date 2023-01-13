import { actionNames } from 'constants/actionNames';
import { call, takeLeading } from 'redux-saga/effects';

import { getCityNameWorker } from '@/store/sagas/workers/getCityNameWorker';
import { getDailyWeatherWorker } from '@/store/sagas/workers/getDailyWeatherWorker';
import { getWeekWeatherWorker } from '@/store/sagas/workers/getWeekWeatherWorker';
import { ActionType } from '@/store/types';

function* getWeather(action: ActionType) {
  yield call(getWeekWeatherWorker, action);
  yield call(getDailyWeatherWorker, action);
}

export function* watchTownInputSaga() {
  yield takeLeading(actionNames.GET_WEATHER, getWeather);
  yield takeLeading(actionNames.GET_CITY_NAME, getCityNameWorker);
}
