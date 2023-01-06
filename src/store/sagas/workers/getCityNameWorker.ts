import { getCityNameApi } from 'api/getCityNameApi';
import { getWeekWeatherApi } from 'api/getWeekWeatherApi';
import { call, put } from 'redux-saga/effects';
import { setWeekWeather } from 'store/actionCreators';
import {
  ReverseGeocodingCoords,
  ReverseGeocodingType,
} from 'types/openWeatherTypes';
import { ActionType } from 'types/reduxTypes';
import { visualCrossingData } from 'types/visualCrossingTypes';

export function* getCityNameWorker({ payload }: ActionType) {
  try {
    const coords = payload as ReverseGeocodingCoords;

    const data: ReverseGeocodingType = yield call(getCityNameApi, coords);
    const res: visualCrossingData = yield call(
      getWeekWeatherApi,
      data.name as string
    );

    yield put(setWeekWeather(res as visualCrossingData));
  } catch {
    console.log('Error');
  }
}
