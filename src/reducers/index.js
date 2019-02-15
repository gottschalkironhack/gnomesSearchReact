import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from '../storeConfig/history';
import gnomes from './gnomes';
import error from './error';
import success from './success';
import fetching from './fetching';

export default combineReducers({
  router: connectRouter(history),
  gnomes,
  error,
  success,
  fetching,
});
