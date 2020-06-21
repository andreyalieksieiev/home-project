import { call, put, takeLatest } from 'redux-saga/effects';
import CountryActions, { GET_COUNTRY } from './actions';

import axios from 'axios';

function* getCountrySaga() {
  try {
    const { data } = yield call(() => axios.get('https://restcountries.eu/rest/v2/all'))
    yield put(CountryActions.getCountrySuccess(data))
  } catch (err) {
    yield put(CountryActions.getCountryFail(err.response))
  }
}

export default function* watchCountry() {
  yield takeLatest(GET_COUNTRY, getCountrySaga)
}