import { SET_DAILY_WEATHER, SET_WEEK_WEATHER } from 'constants/actionNames';
import { mockWeather } from 'constants/mock';
import { DailyWeather } from 'types/openWeatherTypes';
import { ActionType, WeekWeatherState } from 'types/reduxTypes';
import { visualCrossingData } from 'types/visualCrossingTypes';
import {
  parseObjectFromOpenWeather,
  parseObjectFromVisualCrossing,
} from 'utils/objectParsers';

const initialState: WeekWeatherState = {
  visualCrossingWeather: mockWeather,
  openWeather: [],
};

function weatherReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case SET_WEEK_WEATHER: {
      const data = parseObjectFromVisualCrossing(
        action.payload as visualCrossingData
      );

      return { ...state, visualCrossingWeather: data };
    }
    case SET_DAILY_WEATHER: {
      const data = parseObjectFromOpenWeather(action.payload as DailyWeather);
      return { ...state, openWeather: data };
    }
    default:
      return state;
  }
}

export default weatherReducer;
