import { createAction } from 'redux-actions';

export const CHANGE_INPUT = 'CHANGE_INPUT';

export const GET_DELAY_COUNTRY = 'GET_DELAY_COUNTRY';
export const GET_DELAY_COUNTRY_SUCCESS = 'GET_DELAY_COUNTRY_SUCCESS';
export const GET_DELAY_COUNTRY_FAIL = 'GET_DELAY_COUNTRY_FAIL';

const DelayCountryActions = {
  changeInput: createAction(CHANGE_INPUT, ({ name, value }) => ({ name, value })),

  getDelayCountry: createAction(GET_DELAY_COUNTRY, (search) => (search)),
  getDelayCountrySuccess: createAction(GET_DELAY_COUNTRY_SUCCESS, (data) => (data)),
  getDelayCountryFail: createAction(GET_DELAY_COUNTRY_FAIL, (error) => (error))
}

export default DelayCountryActions;