import { watchTownInputSaga } from './watchers/watchTownInputSaga';

export function* rootSaga() {
  yield watchTownInputSaga();
}
