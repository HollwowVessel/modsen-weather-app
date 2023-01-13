import { actionNames } from '@/constants/actionNames';
import { mockWeatherDaily, mockWeatherHourly } from '@/constants/mock';
import { ActionType, WeatherState } from '@/store/types';
import { DailyWeather } from '@/types/openWeatherTypes';
import { visualCrossingData } from '@/types/visualCrossingTypes';
import {
  parseObjectFromOpenWeather,
  parseObjectFromVisualCrossing,
} from '@/utils/objectParsers';

const initialState: WeatherState = {
  visualCrossingWeather: mockWeatherDaily,
  openWeather: mockWeatherHourly,
  error: '',
};

function weatherReducer(state = initialState, { type, payload }: ActionType) {
  switch (type) {
    case actionNames.SET_WEEK_WEATHER: {
      const data = parseObjectFromVisualCrossing(payload as visualCrossingData);
      return { ...state, visualCrossingWeather: data, error: '' };
    }
    case actionNames.SET_DAILY_WEATHER: {
      const data = parseObjectFromOpenWeather(payload as DailyWeather);
      return { ...state, openWeather: data, error: '' };
    }
    case actionNames.CATCH_WEATHER: {
      return { ...state, error: 'Something went completely wrong...' };
    }
    default:
      return state;
  }
}

export default weatherReducer;
