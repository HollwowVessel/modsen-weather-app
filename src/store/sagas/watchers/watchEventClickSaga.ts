import { GET_DAILY_EVENTS } from 'constants/actionNames';

import { takeLeading } from 'redux-saga/effects';
import { getEventsWorker } from '../workers/getEventsWorker';

export function* watchEventClickSaga() {
  yield takeLeading(GET_DAILY_EVENTS, getEventsWorker);
}
