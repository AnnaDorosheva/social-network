import {authAPI} from '../api';
import { stopSubmit } from 'redux-form';

const SET_USER_LOGIN = "SET_USER_LOGIN";

const initialState = {
userId: null,
email: null,
login: null,
isAuth: false,
isLoading: false
}

const authReduser = (state =initialState, action) => {
switch(action.type) {
case SET_USER_LOGIN:
 return {
...state,
...action.data,
  }
  default:
    return state;
}
};

export default authReduser;

export const setUserLoginActionCreator = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_LOGIN,
    data: {
      userId,
      email,
      login,
      isAuth
    }
  }
};

export const getAuthUserDataThunk = () => (dispatch) => {
  return authAPI.me().then((data) => {
    if(data.resultCode === 0) {
      const {id, email, login } = data.data;
      dispatch(setUserLoginActionCreator(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
authAPI.login(email, password, rememberMe).then((data) => {
  if(data.resultCode === 0) {
dispatch(getAuthUserDataThunk())
  } else {
const message = data.messages.length > 0 ? data.messages[0] : "Somesing is wrong";
    dispatch(stopSubmit("login", { _error: message}));
  }
})
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if(data.resultCode === 0) {
  dispatch(setUserLoginActionCreator(null, null, null, false))
    }
  })
  };



