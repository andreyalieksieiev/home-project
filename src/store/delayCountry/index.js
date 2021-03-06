import {CHANGE_INPUT,
  GET_DELAY_COUNTRY,
  GET_DELAY_COUNTRY_SUCCESS, 
  GET_DELAY_COUNTRY_FAIL,
  
} from './actions';

const initialState = {
  isLoading: false,
  error: '',
  country: [],
  search: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value
      }
    case GET_DELAY_COUNTRY: 
      return{
        ...state,
        isLoading: true
      }
    case GET_DELAY_COUNTRY_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        country: action.payload
      }
    case GET_DELAY_COUNTRY_FAIL: 
      return {
        ...state,
        isLoading: false,
        error: action.payload.status
      }
    default: 
      return state;
  };
};