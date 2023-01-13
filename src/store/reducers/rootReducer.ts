import { combineReducers } from 'redux';

import eventReducer from './eventReducer';
import helperReducer from './helperReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  event: eventReducer,
  helper: helperReducer,
});

export default rootReducer;
