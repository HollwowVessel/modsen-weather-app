import { SET_WEEK_WEATHER } from 'constants/actionNames';
import { mockWeather } from 'constants/mock';
import { actionType } from 'types/redux';
import { visualCrossingData } from 'types/vissualCrossing';
import { parseObjectFromVisualCrossing } from 'utils/objectParsers';

const initialState = { weather: mockWeather };

function weekWeatherReducer(state = initialState, action: actionType) {
  switch (action.type) {
    case SET_WEEK_WEATHER: {
      const data = parseObjectFromVisualCrossing(
        action.payload as visualCrossingData
      );

      return { ...state, weather: data };
    }
    default:
      return state;
  }
}

export default weekWeatherReducer;
