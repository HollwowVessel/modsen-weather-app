import { SET_DAILY_WEATHER, SET_WEEK_WEATHER } from 'constants/actionNames';
import { mockWeatherDaily, mockWeatherHourly } from 'constants/mock';
import { DailyWeather } from 'types/openWeatherTypes';
import { ActionType, WeekWeatherState } from 'types/reduxTypes';
import { visualCrossingData } from 'types/visualCrossingTypes';
import {
  parseObjectFromOpenWeather,
  parseObjectFromVisualCrossing,
} from 'utils/objectParsers';

const initialState: WeekWeatherState = {
  visualCrossingWeather: mockWeatherDaily,
  openWeather: mockWeatherHourly,
};

function weatherReducer(state = initialState, { type, payload }: ActionType) {
  switch (type) {
    case SET_WEEK_WEATHER: {
      const data = parseObjectFromVisualCrossing(payload as visualCrossingData);

      return { ...state, visualCrossingWeather: data };
    }
    case SET_DAILY_WEATHER: {
      const data = parseObjectFromOpenWeather(payload as DailyWeather);
      return { ...state, openWeather: data };
    }
    default:
      return state;
  }
}

export default weatherReducer;
