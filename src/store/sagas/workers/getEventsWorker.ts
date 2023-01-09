import { getEventsApi } from 'api/getEventsApi';
import { call, put } from 'redux-saga/effects';
import { catchDailyEvents, setDailyEvents } from 'store/actionCreators';

export function* getEventsWorker() {
  try {
    const data: Event = yield call(getEventsApi);
    if ('result' in data) yield put(setDailyEvents(data.result));
  } catch {
    yield put(catchDailyEvents());
  }
}
