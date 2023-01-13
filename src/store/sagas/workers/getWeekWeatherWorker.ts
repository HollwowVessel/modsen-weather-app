import { call, put } from 'redux-saga/effects';

import { catchWeather, setWeekWeather } from '@/actions';
import { getWeekWeatherApi } from '@/api/getWeekWeatherApi';
import { ActionType } from '@/store/types';
import { visualCrossingData } from '@/types/visualCrossingTypes';

export function* getWeekWeatherWorker({ payload }: ActionType) {
  try {
    const data: visualCrossingData = yield call(
      getWeekWeatherApi,
      payload as string
    );
    yield put(setWeekWeather(data as visualCrossingData));
  } catch {
    yield put(catchWeather());
  }
}
