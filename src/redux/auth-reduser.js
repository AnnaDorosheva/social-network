import {authAPI} from '../api';

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
// isAuth: true
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
  authAPI.me().then((data) => {
     
    if(data.resultCode === 0) {
      const {id, email, login } = data.data;
      dispatch(setUserLoginActionCreator(id, email, login, true));
    }
   
  })
};

export const login = (email, password, rememberMe) => (dispatch) => {
authAPI.login(email, password, rememberMe).then((data) => {
  if(data.resultCode === 0) {
dispatch(getAuthUserDataThunk())
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



