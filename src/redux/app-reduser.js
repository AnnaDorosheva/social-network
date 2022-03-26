import { getAuthUserDataThunk } from "./auth-reduser";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const initialstate = {
  initialized: false,
};

const appReduser = (state = initialstate, action) => {
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

export const initializedActionCreator = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initializeAPP = () => (dispatch) => {
  const dispatchResult = dispatch(getAuthUserDataThunk());

  Promise.all([dispatchResult]).then(() => {
    dispatch(initializedActionCreator());
  });
};
