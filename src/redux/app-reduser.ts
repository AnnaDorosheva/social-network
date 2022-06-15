// import { initializedActionCreator } from './app-reduser';
import { getAuthUserDataThunk } from "./auth-reduser";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type InitializedType = {
  initialized: boolean
};

const initialstate: InitializedType = {
  initialized: false,
};

const appReduser = (state = initialstate, action: any) : InitializedType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};
export default appReduser;

export type InitializedSuccesActionType = {
type: typeof INITIALIZED_SUCCESS
};

export const initializedActionCreator = () : InitializedSuccesActionType => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initializeAPP = () => (dispatch: any) => {
  const dispatchResult = dispatch(getAuthUserDataThunk());

  Promise.all([dispatchResult]).then(() => {
    dispatch(initializedActionCreator());
  });
};
