import { actionNames } from '@/constants/actionNames';
import { ActionType, EventState } from '@/store/types';
import { Event } from '@/types/eventTypes';
import { parseEvent } from '@/utils/objectParsers';

const initialState: EventState = {
  dailyEvents: [],
  error: '',
};

function eventReducer(state = initialState, { type, payload }: ActionType) {
  switch (type) {
    case actionNames.SET_DAILY_EVENTS: {
      const res = parseEvent(payload as Event[]);
      return { ...state, dailyEvents: res, error: '' };
    }
    case actionNames.CATCH_DAILY_EVENTS: {
      return { ...state, error: 'Something went completely wrong' };
    }
    default:
      return state;
  }
}

export default eventReducer;
