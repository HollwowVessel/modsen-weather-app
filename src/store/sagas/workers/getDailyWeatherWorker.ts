import { call, put } from 'redux-saga/effects';

import { catchWeather, setDailyWeather } from '@/actions';
import { getDailyWeatherApi } from '@/api/getDailyWeatherApi';
import { ActionType } from '@/store/types';
import { DailyWeather } from '@/types/openWeatherTypes';

export function* getDailyWeatherWorker({ payload }: ActionType) {
  try {
    const data: DailyWeather = yield call(
      getDailyWeatherApi,
      payload as string
    );

    yield put(setDailyWeather(data));
  } catch {
    yield put(catchWeather());
  }
}
