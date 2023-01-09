import { CATCH_DAILY_EVENTS, SET_DAILY_EVENTS } from 'constants/actionNames';
import { Event } from 'types/eventTypes';

import { ActionType } from 'types/reduxTypes';
import { parseEvent } from 'utils/objectParsers';

const initialState = {
  dailyEvents: [],
  error: '',
};

function eventReducer(state = initialState, { type, payload }: ActionType) {
  switch (type) {
    case SET_DAILY_EVENTS: {
      const res = parseEvent(payload as Event[]);
      return { ...state, dailyEvents: res, error: '' };
    }
    case CATCH_DAILY_EVENTS: {
      return { ...state, error: 'Something went completely wrong' };
    }
    default:
      return state;
  }
}

export default eventReducer;
