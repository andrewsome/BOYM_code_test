import { GET_REPORT } from '../actions/types';

const initialState = {
  unfinishReports: {}
}

export default function(state = initialState, action) {

  switch(action.type) {
    case GET_REPORT:
      return {
        ...state,
        unfinishReports: action.payload,
      }
    default:
      return state;
  }
}

