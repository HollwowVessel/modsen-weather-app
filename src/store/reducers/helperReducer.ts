import { actionNames } from '@/constants/actionNames';
import { ActionType, HelpState } from '@/store/types';

const initialState: HelpState = {
  loading: false,
  url: '',
};

function helperReducer(state = initialState, { type, payload }: ActionType) {
  switch (type) {
    case actionNames.SET_LOAD: {
      return { ...state, loading: true };
    }
    case actionNames.SET_IMAGE: {
      payload = URL.createObjectURL(payload as Blob);
      return { url: payload, loading: false };
    }
    default:
      return state;
  }
}

export default helperReducer;
