import { createAction } from 'redux-actions';

export const CHANGE_INPUT = 'CHANGE_INPUT';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const CONFIRM_EMAIL = 'CONFIRM_EMAIL';
export const CONFIRM_EMAIL_SUCCESS = 'CONFIRM_EMAIL_SUCCESS';
export const CONFIRM_EMAIL_FAIL = 'CONFIRM_EMAIL_FAIL';

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL';

export const NEW_PASSWORD = 'NEW_PASSWORD';
export const NEW_PASSWORD_SUCCESS = 'NEW_PASSWORD_SUCCESS';
export const NEW_PASSWORD_FAIL = 'NEW_PASSWORD_FAIL';

const AuthActions = {
  changeInput: createAction(CHANGE_INPUT, ({ name, value }) => ({ name, value })),

  register: createAction(REGISTER, ({ firstName, lastName, email, password }) => ({ firstName, lastName, email, password })),
  registerSuccess: createAction(REGISTER_SUCCESS, ( data ) => ( data )),
  registerFail: createAction(REGISTER_FAIL, (error) => ( error )),

  login: createAction(LOGIN, ({ email, password }) => ({ email, password })),
  loginSuccess: createAction(LOGIN_SUCCESS, (data) => (data)),
  loginFail: createAction(LOGIN_FAIL, (error) => ( error )),

  confirmEmail: createAction(CONFIRM_EMAIL, ({ confirmEmailToken }) => ({ confirmEmailToken })),
  confirmEmailSuccess: createAction(CONFIRM_EMAIL_SUCCESS, ( {data} ) => ( {data} )),
  confirmEmailFail: createAction(CONFIRM_EMAIL_FAIL, (error) => (error)),

  resetPassword: createAction(RESET_PASSWORD, ({ email }) => ({ email })),
  resetPasswordSuccess: createAction(RESET_PASSWORD_SUCCESS, ( data ) => ( data )),
  resetPasswordFail: createAction(RESET_PASSWORD_FAIL, ({error}) => ({ error })),

  newPassword: createAction(NEW_PASSWORD, ({ resetPasswordToken, newPassword }) => ({ resetPasswordToken, newPassword })),
  newPasswordSuccess: createAction(NEW_PASSWORD_SUCCESS, ( data ) => ( data )),
  newPasswordFail: createAction(NEW_PASSWORD_FAIL, ({error}) => ({ error })),
}

export default AuthActions