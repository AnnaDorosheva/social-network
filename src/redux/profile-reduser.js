import {profileAPI} from "../api";


const ADD_POST = "ADD_POST";
const CHANGE_NEW_POS_TEXT = "CHANGE_NEW_POS_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
  posts: [
    { id: 1, message: "Hey averywone!", liksCount: 4 },
    { id: 2, message: "Perfect day today...", liksCount: 4 },
    { id: 3, message: "O yes!", liksCount: 4 },
  ],
  newPostText: "",
  userProfile: null,
  status: ""
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 6,
        message: state.newPostText,

        liksCount: 3,
      };
      const stateCopy = {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

      return stateCopy;
    }
    case CHANGE_NEW_POS_TEXT: {
      const stateCopy = {
        ...state,
        newPostText: action.newText,
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
        status: action.status
      }
    default:
      return state;
  }
};

export default profileReduser;

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const changeNewPostTextActionCreator = (text) => {
  return {
    type: CHANGE_NEW_POS_TEXT,
    newText: text,
  };
};
export const setUserProfileActionCreator = (userProfile) => {
  return {
    type: SET_USER_PROFILE,
    userProfile,
  };
};
export const setStatusActionCreator = (status) => {
  return {
    type: SET_STATUS,
    status
  }
};
export const getUserProfileThunk = (id, setLoading) => (dispatch) => {
  profileAPI.getProfile(id).then((data) => {
    dispatch(setUserProfileActionCreator(data));
    setLoading(false);
  });
};
export const getUserStatusThunk = (id) => (dispatch) => {
profileAPI.getStatus(id).then((data) => {
  dispatch(setStatusActionCreator(data));
})
};
export const updateUserStatusThunk = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if(data.resultCode === 0) {
      dispatch(setStatusActionCreator(status));
    }
  })
  };