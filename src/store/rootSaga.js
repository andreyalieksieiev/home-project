import { all } from 'redux-saga/effects';
import watchAuth from './auth/sagas';
import watchUser from './user/sagas';
import watchCats from './cats/sagas';
import watchCountry from './country/sagas';
import watchDelayCountry from './delayCountry/sagas';


export function* rootSaga() {
  yield all([
    watchAuth(),
    watchUser(),
    watchCats(),
    watchCountry(),
    watchDelayCountry(),
  ]);
}