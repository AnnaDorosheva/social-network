import { ResultCodeEnum } from './../api';
import { authAPI } from "../api";
import { stopSubmit } from "redux-form";

const SET_USER_LOGIN = "auth/SET_USER_LOGIN";

// export type InitialStateType = {
//   userId: number | null;
//   email: string | null;
//   login: string | null;
//   isAuth: boolean;
//   isLoading: boolean;
// };

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  isLoading: false,
};

export type InitialStateType = typeof initialState;

const authReduser = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_LOGIN:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default authReduser;

type SetAuthUserDataType = {
  userId: number | null,
  email: string | null,
  login: string| null,
  isAuth: boolean;
};

export type SetAuthUserDataLoginType = {
  type: typeof SET_USER_LOGIN;
  data: SetAuthUserDataType;
};

export const setUserLoginActionCreator = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) : SetAuthUserDataLoginType => {
  return {
    type: SET_USER_LOGIN,
    data: {
      userId,
      email,
      login,
      isAuth,
    },
  };
};

export const getAuthUserDataThunk = () => async (dispatch: any) => {
  let response = await authAPI.me();
  if (response.resultCode === ResultCodeEnum.Success) {
    const { id, email, login } = response.data;
    dispatch(setUserLoginActionCreator(id, email, login, true));
  }
};

export const login =
  (email: string, password: string, rememberMe: boolean) =>
  async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.resultCode === ResultCodeEnum.Success) {
      dispatch(getAuthUserDataThunk());
    } else {
      const message =
        response.messages.length > 0
          ? response.messages[0]
          : "Somesing is wrong";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.resultCode === ResultCodeEnum.Success) {
    dispatch(setUserLoginActionCreator(null, null, null, false));
  }
};
