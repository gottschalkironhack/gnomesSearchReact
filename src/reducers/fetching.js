import {
  FETCH_GNOMES_BEGIN,
  FETCH_GNOMES_SUCCESS,
  FETCH_GNOMES_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  status: false,
};

export default function fetching(state = initialState, action) {
  switch (action.type) {
    case FETCH_GNOMES_BEGIN:
      return {
        ...state,
        status: true,
      };
    case FETCH_GNOMES_SUCCESS:
      return {
        ...state,
        status: false,
      };
    case FETCH_GNOMES_FAILURE:
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
}
