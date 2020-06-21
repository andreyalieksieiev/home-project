import { createAction } from 'redux-actions';

export const CHANGE_INPUT = 'CHANGE_INPUT';

export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_COUNTRY_SUCCESS = 'GET_COUNTRY_SUCCESS';
export const GET_COUNTRY_FAIL = 'GET_COUNTRY_FAIL';

const CountryActions = {
  changeInput: createAction(CHANGE_INPUT, ({ name, value }) => ({ name, value })),

  getCountry: createAction(GET_COUNTRY),
  getCountrySuccess: createAction(GET_COUNTRY_SUCCESS, (data) => (data)),
  getCountryFail: createAction(GET_COUNTRY_FAIL, (error) => (error))
}

export default CountryActions;