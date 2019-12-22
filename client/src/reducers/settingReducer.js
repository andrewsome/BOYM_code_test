import { UPDATE_SETTINGS } from '../actions/types';

const initialState = {
  config: {},
}

export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SETTINGS:
      return {
        ...state,
        config: action.payload
      };
    default:
      return state;
  }
}

