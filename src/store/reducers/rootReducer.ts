import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  event: eventReducer,
});

export default rootReducer;
