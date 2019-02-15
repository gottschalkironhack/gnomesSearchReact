import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { history } from './history';
import { logger } from './logger';
import reducer from '../reducers';

export default function configureStore() {
  if (process.env.NODE_ENV !== 'production') {
    return createStore(
      reducer,
      compose(
        applyMiddleware(
          routerMiddleware(history),
          thunk,
          logger,
        ),
      ),
    );
  }
  return createStore(
    reducer,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
      ),
    ),
  );
}
