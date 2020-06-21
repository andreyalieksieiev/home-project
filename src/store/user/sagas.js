import { call, put, takeLatest } from 'redux-saga/effects';
import UserActions, { GET_USER, UP_DATE_PROFILE, GET_USER_CARD } from './actions';
import axios from 'axios';

import api, { applyToken } from '../../services/api';

function* getUserSaga() {
  try {
    yield call(applyToken, localStorage.getItem('token'));
    const { data } = yield call(api.get, '/profile')
    yield put(UserActions.getUserSuccess(data))
  } catch (err) {
    yield put(UserActions.getUserFail(err.response.data))
  }
}

function* upDateProfileSaga(action) {
  try {
    const { firstName: newFirstName, lastName: newLastName} = action.payload
    const { data } = yield call(api.put, '/profile', { firstName: newFirstName, lastName: newLastName})
    yield put(UserActions.upDateProfileSuccess(data))
  } catch (err) {
    yield put(UserActions.upDateProfileFail(err.response.data))
  }
}

function* getUserCardSaga() {
  try {
    const { data } = yield call(() => axios.get('https://ghibliapi.herokuapp.com/people/'))
    yield put(UserActions.getUserCardSuccess(data))
  } catch (err) {
    yield put(UserActions.getUserCardFail(err.response))
  }
}

export default function* watchUser() {
  yield takeLatest(GET_USER, getUserSaga)
  yield takeLatest(UP_DATE_PROFILE, upDateProfileSaga)
  yield takeLatest(GET_USER_CARD, getUserCardSaga)

}
