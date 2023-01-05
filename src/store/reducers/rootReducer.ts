import { combineReducers } from 'redux';
import weekWeatherReducer from './weekWeatherReducer';

const rootReducer = combineReducers({ weekWeather: weekWeatherReducer });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
