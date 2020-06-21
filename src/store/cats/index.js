import {
  GET_ALL_CATS,
  GET_ALL_CATS_SUCCESS,
  GET_ALL_CATS_FAIL,
  GET_ALL_CATS_LENGTH,
  GET_ALL_CATS_LENGTH_SUCCESS,
  GET_ALL_CATS_LENGTH_FAIL,
  CURRENT_PAGE,
  CURRENT_PAGE_SUCCESS,
  CURRENT_PAGE_FAIL
} from './actions';

const initialState = {
  isLoading: false,
  error: '',
  currentPage: 1,
  totalCount: 0,
  pageSize: 5,
  allCats: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_CATS: 
      return {
        ...state,
        isLoading: true,
      }
    case GET_ALL_CATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allCats: action.payload,
      }
    case GET_ALL_CATS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }
    case GET_ALL_CATS_LENGTH: 
      return {
        ...state,
        isLoading: true,
      }
    case GET_ALL_CATS_LENGTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        totalCount: action.payload.length,
      }
    case GET_ALL_CATS_LENGTH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }
    case CURRENT_PAGE: 
      return {
        ...state,
        isLoading: true,
      }
    case CURRENT_PAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allCats: action.payload,
      }
    case CURRENT_PAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }
    default: 
    return state;
  };
};
