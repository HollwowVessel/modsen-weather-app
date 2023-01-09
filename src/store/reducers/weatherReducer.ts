import {
  CATCH_WEATHER,
  SET_DAILY_WEATHER,
  SET_WEEK_WEATHER,
} from 'constants/actionNames';
import { mockWeatherDaily, mockWeatherHourly } from 'constants/mock';
import { DailyWeather } from 'types/openWeatherTypes';
import { ActionType, WeatherState } from 'types/reduxTypes';
import { visualCrossingData } from 'types/visualCrossingTypes';
import {
  parseObjectFromOpenWeather,
  parseObjectFromVisualCrossing,
} from 'utils/objectParsers';

const initialState: WeatherState = {
  visualCrossingWeather: mockWeatherDaily,
  openWeather: mockWeatherHourly,
  error: '',
};

function weatherReducer(state = initialState, { type, payload }: ActionType) {
  switch (type) {
    case SET_WEEK_WEATHER: {
      const data = parseObjectFromVisualCrossing(payload as visualCrossingData);
      return { ...state, visualCrossingWeather: data, error: '' };
    }
    case SET_DAILY_WEATHER: {
      const data = parseObjectFromOpenWeather(payload as DailyWeather);
      return { ...state, openWeather: data, error: '' };
    }
    case CATCH_WEATHER: {
      return { ...state, error: 'Something went completely wrong...' };
    }
    default:
      return state;
  }
}

export default weatherReducer;
