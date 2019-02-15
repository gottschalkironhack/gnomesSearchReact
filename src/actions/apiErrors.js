import {
  RESET_API_ERROR,
  SET_API_ERROR,
} from './actionTypes';

export const setApiErrors = message => ({
  type: SET_API_ERROR,
  message,
});

export const resetApiErrors = () => ({
  type: RESET_API_ERROR,
});
