import {
  SET_API_SUCCESS,
  RESET_API_SUCCESS,
} from './actionTypes';

export const setApiSuccess = message => ({
  type: SET_API_SUCCESS,
  message,
});

export const resetApiSuccess = () => ({
  type: RESET_API_SUCCESS,
});
