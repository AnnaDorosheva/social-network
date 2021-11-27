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
isAuth: true
  }
  default:
    return state;
}
};

export default authReduser;

export const setUserLoginActionCreator = (userId, email, login) => {
  return {
    type: SET_USER_LOGIN,
    data: {
      userId,
      email,
      login
    }
  }
};

export const getAuthUserDataThunk = () => (dispatch) => {
  authAPI.me().then((data) => {
     
    if(data.resultCode === 0) {
      const {id, email, login } = data.data;
      dispatch(setUserLoginActionCreator(id, email, login));
    }
   
  });
}