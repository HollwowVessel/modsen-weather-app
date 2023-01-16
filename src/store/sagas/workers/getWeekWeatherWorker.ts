import { call, put } from 'redux-saga/effects';

import { catchWeather, setImage, setWeekWeather } from '@/actions';
import { getImageApi } from '@/api/getImageApi';
import { getWeekWeatherApi } from '@/api/getWeekWeatherApi';
import { ActionType } from '@/store/types';
import { visualCrossingData } from '@/types/visualCrossingTypes';

export function* getWeekWeatherWorker({ payload }: ActionType) {
  try {
    const data: visualCrossingData = yield call(
      getWeekWeatherApi,
      payload as string
    );

    const type = `https://source.unsplash.com/1920x1080/?${data.days[0].icon}`;
    const img: string = yield call(getImageApi, type);

    yield put(setWeekWeather(data as visualCrossingData));
    yield put(setImage(img));
  } catch {
    yield put(catchWeather());
  }
}
