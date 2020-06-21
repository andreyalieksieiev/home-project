import { createAction } from 'redux-actions';

export const GET_ALL_CATS = 'GET_ALL_CATS';
export const GET_ALL_CATS_SUCCESS = 'GET_ALL_CATS_SUCCESS';
export const GET_ALL_CATS_FAIL = 'GET_ALL_CATS_FAIL';

export const GET_ALL_CATS_LENGTH = 'GET_ALL_CATS_LENGTH';
export const GET_ALL_CATS_LENGTH_SUCCESS = 'GET_ALL_CATS_LENGTH_SUCCESS';
export const GET_ALL_CATS_LENGTH_FAIL = 'GET_ALL_CATS_LENGTH_FAIL';

export const CURRENT_PAGE = 'CURRENT_PAGE';
export const CURRENT_PAGE_SUCCESS = 'CURRENT_PAGE_SUCCESS';
export const CURRENT_PAGE_FAIL = 'CURRENT_PAGE_FAIL';

const CatsActions = {
  getAllCats: createAction(GET_ALL_CATS),
  getAllCatsSuccess: createAction(GET_ALL_CATS_SUCCESS, (data) => (data)),
  getAllCatsFail: createAction(GET_ALL_CATS_SUCCESS, (error) => (error)),

  getAllCatsLength: createAction(GET_ALL_CATS_LENGTH),
  getAllCatsLengthSuccess: createAction(GET_ALL_CATS_LENGTH_SUCCESS, (data) => (data)),
  getAllCatsLengthFail: createAction(GET_ALL_CATS_LENGTH_FAIL, (error) => (error)),

  currentPage: createAction(CURRENT_PAGE),
  currentPageSuccess: createAction(CURRENT_PAGE_SUCCESS, (data) => (data)),
  currentPageFail: createAction(CURRENT_PAGE_FAIL, (error) => (error)),
}

export default CatsActions;