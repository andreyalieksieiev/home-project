import {
  CHANGE_INPUT,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CONFIRM_EMAIL,
  CONFIRM_EMAIL_SUCCESS,
  CONFIRM_EMAIL_FAIL,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  NEW_PASSWORD,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_FAIL
} from './actions'

const initialState = {
  isLoading: false,
  user: null,
  token: null,
  error: '',
  success: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  firstEmail: '',
  secondEmail: ''
}

export default (state = initialState, action) => {
  // console.log('action: ', action);
  switch (action.type) {
    case CHANGE_INPUT:
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value
      }
    case REGISTER:
      return {
        ...state,
        isLoading: true,
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.payload,
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    case REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error.message,
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    case LOGIN:
      return {
        ...state,
        isLoading: true,
      }
    case LOGIN_SUCCESS: {
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        email: '',
        password: '',
      }
    }
    case LOGIN_FAIL: 
      return {
        ...state,
        isLoading: false,
        error: action.payload.error.message,
        email: '',
        password: ''
      }
    case CONFIRM_EMAIL:
      return {
        ...state,
        isLoading: true,
      }  
    case CONFIRM_EMAIL_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        success: action.payload.data.message,
      }
    case CONFIRM_EMAIL_FAIL: 
      return {
        ...state,
        isLoading: false,
        error: action.payload.error.message,
      }
    case RESET_PASSWORD:
      return {
        ...state,
        isLoading: true,
      }  
    case RESET_PASSWORD_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        success: action.payload.message,
        email: '',
      } 
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        isLoading: false, 
        error: action.payload.error.message,
        email: '',
      }  
    case NEW_PASSWORD:
      return {
        ...state,
        isLoading: true,
      } 
    case NEW_PASSWORD_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        success: action.payload.message,
        firstEmail: '',
        secondEmail: ''
      }
     case NEW_PASSWORD_FAIL: 
      return {
        ...state,
        isLoading: false,
        error: action.payload.error.message,
        firstEmail: '',
        secondEmail: ''
      }
    default:
      return state
  }
}
  