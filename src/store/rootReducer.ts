import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from '../services/history';
import auth from './auth';
import user from './user';
import cats from './cats';
import country from './country';
import delayCountry from './delayCountry';

// import { reducer as auth } from 'store/auth/reducer';

const rootReducer = combineReducers({
  auth,
  user,
  cats,
  country,
  delayCountry,
  router: connectRouter(history),
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;