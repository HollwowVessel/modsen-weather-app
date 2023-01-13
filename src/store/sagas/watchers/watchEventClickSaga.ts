import { takeLeading } from 'redux-saga/effects';

import { actionNames } from '@/constants/actionNames';
import { getEventsWorker } from '@/store/sagas/workers/getEventsWorker';

export function* watchEventClickSaga() {
  yield takeLeading(actionNames.GET_DAILY_EVENTS, getEventsWorker);
}
