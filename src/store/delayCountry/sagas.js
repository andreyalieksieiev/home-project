import { call, put, takeLatest } from 'redux-saga/effects';
import DelayCountryActions, { GET_DELAY_COUNTRY } from './actions';

import axios from 'axios';

function* getDelayCountrySaga(action) {
  try {
    const { search } = action.payload;
    const { data } = yield call(() => axios.get(`https://restcountries.eu/rest/v2/name/${search}`))
    yield put(DelayCountryActions.getDelayCountrySuccess(data))
  } catch (err) {
    yield put(DelayCountryActions.getDelayCountryFail(err.response))
  }
}

export default function* watchDelayCountry() {
  yield takeLatest(GET_DELAY_COUNTRY, getDelayCountrySaga)
}
