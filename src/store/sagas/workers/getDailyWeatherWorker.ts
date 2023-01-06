import { getDailyWeatherApi } from 'api/getDailyWeatherApi';

import { call, put } from 'redux-saga/effects';
import { setDailyWeather } from 'store/actionCreators';

import { DailyWeather } from 'types/openWeatherTypes';
import { ActionType } from 'types/reduxTypes';

export function* getDailyWeatherWorker({ payload }: ActionType) {
  try {
    const data: DailyWeather = yield call(
      getDailyWeatherApi,
      payload as string
    );

    yield put(setDailyWeather(data));
  } catch {
    console.log('Error');
  }
}
