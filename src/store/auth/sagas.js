import { call, put, takeLatest } from 'redux-saga/effects';
import AuthActions, { REGISTER, LOGIN, CONFIRM_EMAIL, RESET_PASSWORD, NEW_PASSWORD } from './actions';

import api, { applyToken } from '../../services/api';

function* registerSaga(action) {
  try {
    const { firstName, lastName, email, password } = action.payload
    const { data } = yield call(api.post, '/auth/signup', { firstName, lastName, email, password })
    yield put(AuthActions.registerSuccess( data ))
  } catch (err) {
    yield put(AuthActions.registerFail(err.response.data))
  }
}

function* loginSaga(action) {
  try {
    const { email, password } = action.payload
    const { data } = yield call(api.post, '/auth/signin', { email, password })
    yield call(applyToken, data.token);
    yield put(AuthActions.loginSuccess( data ))
  } catch (err) {
    yield put(AuthActions.loginFail(err.response.data))
  }
}

function* confirmEmailSaga(action) {
  try {
    const { confirmEmailToken, } = action.payload
    const { data } = yield call(api.post, '/auth/confirm-email', { confirmEmailToken })
    yield put(AuthActions.confirmEmailSuccess( {data} ))
  } catch (err) {
    yield put(AuthActions.confirmEmailFail(err.response.data))
  }
}

function* resetPasswordSaga(action) {
  try {
    const { email } = action.payload
    const { data } = yield call(api.post, '/auth/reset-password', { email })
    yield put(AuthActions.resetPasswordSuccess( data ))
  } catch (err) {
    yield put(AuthActions.resetPasswordFail(err.response.data))
  }
}

function* newPasswordSaga(action) {
  try {
    const { resetPasswordToken, newPassword  } = action.payload
    const { data } = yield call(api.put, 'auth/new-password', { resetPasswordToken, newPassword  })
    yield put(AuthActions.newPasswordSuccess( data ))
  } catch (err) {
    yield put(AuthActions.newPasswordFail(err.response.data))
  }
}

export default function* watchAuth() {
  yield takeLatest(REGISTER, registerSaga)
  yield takeLatest(LOGIN, loginSaga)
  yield takeLatest(CONFIRM_EMAIL, confirmEmailSaga)
  yield takeLatest(RESET_PASSWORD, resetPasswordSaga)
  yield takeLatest(NEW_PASSWORD, newPasswordSaga)
}