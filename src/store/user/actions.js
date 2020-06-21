import { createAction } from 'redux-actions';

export const CHANGE_INPUT = 'CHANGE_INPUT';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export const UP_DATE_PROFILE = 'UP_DATE_PROFILE';
export const UP_DATE_PROFILE_SUCCESS = 'UP_DATE_PROFILE_SUCCESS';
export const UP_DATE_PROFILE_FAIL = 'UP_DATE_PROFILE_FAIL';

export const GET_USER_CARD = 'GET_USER_CARD';
export const GET_USER_CARD_SUCCESS = 'GET_USER_CARD_SUCCESS';
export const GET_USER_CARD_FAIL = 'GET_USER_CARD_FAIL';


const UserActions = {
  changeInput: createAction(CHANGE_INPUT, ({ name, value }) => ({ name, value })),

  getUser: createAction(GET_USER),
  getUserSuccess: createAction(GET_USER_SUCCESS, (data) => (data)),
  getUserFail: createAction(GET_USER_FAIL, (error) => (error)),

  upDateProfile: createAction(UP_DATE_PROFILE, ({firstName, lastName}) => ({firstName, lastName})),
  upDateProfileSuccess: createAction(UP_DATE_PROFILE_SUCCESS, (data) => (data)),
  upDateProfileFail: createAction(UP_DATE_PROFILE_FAIL, (error) => (error)),

  getUserCard: createAction(GET_USER_CARD),
  getUserCardSuccess: createAction(GET_USER_CARD_SUCCESS, (data) => (data)),
  getUserCardFail: createAction(GET_USER_CARD_FAIL, (error) => (error)),
}

export default UserActions;