import { actionNames } from '@/constants/actionNames';
import { ActionType, HelpState } from '@/store/types';

const initialState: HelpState = {
  spinner: false,
  popup: false,
};

function helperReducer(state = initialState, { type }: ActionType) {
  switch (type) {
    case actionNames.SET_SPINNER: {
      console.log(state.spinner);
      return { ...state, spinner: !state.spinner };
    }

    default:
      return state;
  }
}

export default helperReducer;
