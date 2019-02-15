import { LOCATION_CHANGE } from 'react-router-redux';
import {
  SET_API_SUCCESS,
  RESET_API_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  message: null,
  status: false,
};

export default function success(state = initialState, action) {
  switch (action.type) {
    case SET_API_SUCCESS:
      return {
        ...state,
        message: action.message,
        status: true,
      };

    case RESET_API_SUCCESS:
    case LOCATION_CHANGE:
      return {
        ...state,
        message: null,
        status: false,
      };

    default:
      return state;
  }
}
