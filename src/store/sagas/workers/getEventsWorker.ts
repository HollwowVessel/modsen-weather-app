import { call, put } from 'redux-saga/effects';

import { catchDailyEvents, setDailyEvents } from '@/actions';
import { getEventsApi } from '@/api/getEventsApi';
import { Event } from '@/types/eventTypes';

export function* getEventsWorker() {
  try {
    const data: Event = yield call(getEventsApi);
    if ('result' in data) yield put(setDailyEvents(data.result as Event));
  } catch {
    yield put(catchDailyEvents());
  }
}
