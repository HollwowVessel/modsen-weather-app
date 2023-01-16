import { call, put } from 'redux-saga/effects';

import {
  catchWeather,
  setDailyWeather,
  setImage,
  setWeekWeather,
} from '@/actions';
import { getCityNameApi } from '@/api/getCityNameApi';
import { getDailyWeatherApi } from '@/api/getDailyWeatherApi';
import { getImageApi } from '@/api/getImageApi';
import { getWeekWeatherApi } from '@/api/getWeekWeatherApi';
import { ActionType } from '@/store/types';
import {
  DailyWeather,
  ReverseGeocodingCoords,
  ReverseGeocodingType,
} from '@/types/openWeatherTypes';
import { visualCrossingData } from '@/types/visualCrossingTypes';

export function* getCityNameWorker({ payload }: ActionType) {
  try {
    const coords = payload as ReverseGeocodingCoords;

    const data: ReverseGeocodingType = yield call(getCityNameApi, coords);

    const { name } = data;

    const visualCrossingRes: visualCrossingData = yield call(
      getWeekWeatherApi,
      name
    );

    const openWeatherRes: DailyWeather = yield call(getDailyWeatherApi, name);

    const type = `https://source.unsplash.com/1920x1080/?${visualCrossingRes.days[0].icon}`;
    const img: string = yield call(getImageApi, type);

    yield put(setImage(img));
    yield put(setWeekWeather(visualCrossingRes));
    yield put(setDailyWeather(openWeatherRes));
  } catch {
    yield put(catchWeather());
  }
}
