import { getCityNameApi } from 'api/getCityNameApi';
import { getDailyWeatherApi } from 'api/getDailyWeatherApi';
import { getWeekWeatherApi } from 'api/getWeekWeatherApi';
import { call, put, spawn } from 'redux-saga/effects';
import {
  catchWeather,
  setDailyWeather,
  setWeekWeather,
} from 'store/actionCreators';
import {
  DailyWeather,
  ReverseGeocodingCoords,
  ReverseGeocodingType,
} from 'types/openWeatherTypes';
import { ActionType } from 'types/reduxTypes';
import { visualCrossingData } from 'types/visualCrossingTypes';

export function* getCityNameWorker({ payload }: ActionType) {
  try {
    const coords = payload as ReverseGeocodingCoords;

    const data: ReverseGeocodingType = yield call(getCityNameApi, coords);

    const name = data.name;

    const visualCrossingRes: visualCrossingData = yield call(
      getWeekWeatherApi,
      name
    );

    const openWeatherRes: DailyWeather = yield call(getDailyWeatherApi, name);

    yield put(setWeekWeather(visualCrossingRes));
    yield put(setDailyWeather(openWeatherRes));
  } catch {
    yield put(catchWeather());
  }
}
