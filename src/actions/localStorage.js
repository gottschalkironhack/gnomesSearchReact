import {
  FETCH_GNOMES_BEGIN,
  FETCH_GNOMES_SUCCESS,
  FETCH_GNOMES_FAILURE,
} from './actionTypes';
import { resetApiErrors, setApiErrors } from './apiErrors';
import { resetApiSuccess } from './apiSuccess';
import handleApiErrors from './helper/handleApiErrors';
import getLocalStorage from './helper/getLocalStorage';

const fetchGnomesBegin = () => ({
  type: FETCH_GNOMES_BEGIN,
});

const fetchGnomesSuccess = gnomes => ({
  type: FETCH_GNOMES_SUCCESS,
  gnomes,
});

const fetchGnomesFailure = () => ({
  type: FETCH_GNOMES_FAILURE,
});

export const getLocalStorageGnomes = () => (dispatch) => {
  dispatch(resetApiErrors());
  dispatch(fetchGnomesBegin());
  dispatch(resetApiSuccess());
  getLocalStorage()
    .then((localGnomes) => {
      dispatch(fetchGnomesSuccess(localGnomes.gnomes));
    })
    .catch(() => {
      dispatch(fetchGnomesFailure());
      const errorMessage = handleApiErrors('Data could not be retrieved');
      dispatch(setApiErrors(errorMessage));
    });
};
