import { getWeekWeatherApi } from 'api/getWeekWeatherApi';
import { call, put } from 'redux-saga/effects';
import { catchWeather, setWeekWeather } from 'store/actionCreators';
import { ActionType } from 'types/reduxTypes';
import { visualCrossingData } from 'types/visualCrossingTypes';

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
