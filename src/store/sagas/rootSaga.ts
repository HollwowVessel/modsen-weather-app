import { getWeekWeatherApi } from 'api/getWeekWeatherApi';
import { GET_WEEK_WEATHER } from 'constants/actionNames';
import { call, put, takeLatest } from 'redux-saga/effects';
import { setWeekWeather } from 'store/actionCreators';
import { actionType } from 'types/redux';
import { visualCrossingData } from 'types/vissualCrossing';

export function* getWeekWeatherWorker({ payload }: actionType): Generator<any> {
  try {
    const data = yield call(getWeekWeatherApi, payload);
    yield put(setWeekWeather(data as visualCrossingData));
  } catch {
    console.log('Error');
  }
}

export function* watchTownInputSaga() {
  yield takeLatest(GET_WEEK_WEATHER, getWeekWeatherWorker);
}

export function* rootSaga() {
  yield watchTownInputSaga();
}
