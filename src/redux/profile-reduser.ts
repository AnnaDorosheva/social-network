// import { type } from 'os';
import { profileAPI } from "../api";
import { PostType, ProfileType } from "../types/typtes";


const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";


const initialState = {
  posts: [
    { id: 1, message: "Hey averywone!", liksCount: 4 },
    { id: 2, message: "Perfect day today...", liksCount: 4 },
    { id: 3, message: "O yes!", liksCount: 4 },
  ] as Array<PostType>,
  // newPostText: "",
  userProfile: null as ProfileType | null,
  status: "",
};

export type InitialStateType = typeof initialState;

const profileReduser = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 6,
        message: action.post,

        liksCount: 3,
      };
      const stateCopy = {
        ...state,
        posts: [...state.posts, newPost],
        // newPostText: "",
      };

      return stateCopy;
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        userProfile: action.userProfile,
      };
    }
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export default profileReduser;

type AddPostActionCreatorType = {
  type: typeof ADD_POST;
  post: string;
};
export const addPostActionCreator = (
  post: string
): AddPostActionCreatorType => {
  return {
    type: ADD_POST,
    post,
  };
};

type SetUserProfileActionCreatorType = {
  type: typeof SET_USER_PROFILE;
  userProfile: ProfileType;
};
export const setUserProfileActionCreator = (
  userProfile: ProfileType
): SetUserProfileActionCreatorType => {
  return {
    type: SET_USER_PROFILE,
    userProfile,
  };
};

type SetStatusActionCreatorType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setStatusActionCreator = (
  status: string
): SetStatusActionCreatorType => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const getUserProfileThunk =
  (id: number, setLoading: any) => async (dispatch: any) => {
    let response = await profileAPI.getProfile(id);
    dispatch(setUserProfileActionCreator(response.data));
    setLoading(false);
  };
export const getUserStatusThunk = (id: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(id);
  dispatch(setStatusActionCreator(response.data));
};
export const updateUserStatusThunk =
  (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatusActionCreator(status));
      console.log("Статус обновился");
    } else {
      console.log("Статус не обновился!!!!!!!");
    }
  };
