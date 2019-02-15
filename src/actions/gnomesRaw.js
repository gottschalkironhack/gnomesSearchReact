import {
  FETCH_GNOMES_BEGIN,
  FETCH_GNOMES_SUCCESS,
  FETCH_GNOMES_FAILURE,
} from './actionTypes';
import { resetApiErrors, setApiErrors } from './apiErrors';
import { resetApiSuccess } from './apiSuccess';
import { getGnomesData } from '../services/GnomesApi';
import handleApiErrors from './helper/handleApiErrors';


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

export const getGnomes = () => (dispatch) => {
  dispatch(resetApiErrors());
  dispatch(fetchGnomesBegin());
  dispatch(resetApiSuccess());
  getGnomesData()
    .then((gnomes) => {
      dispatch(fetchGnomesSuccess(gnomes));
    })
    .catch((error) => {
      dispatch(fetchGnomesFailure());
      const errorMessage = handleApiErrors(error, 'Data could not be retrieved');
      dispatch(setApiErrors(errorMessage));
    });
};
