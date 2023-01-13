import { all, call } from 'redux-saga/effects';

import { watchEventClickSaga } from './watchers/watchEventClickSaga';
import { watchTownInputSaga } from './watchers/watchTownInputSaga';

export function* rootSaga() {
  yield all([call(watchTownInputSaga), call(watchEventClickSaga)]);
}
