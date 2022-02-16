import { profileAPI } from "../api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
  posts: [
    { id: 1, message: "Hey averywone!", liksCount: 4 },
    { id: 2, message: "Perfect day today...", liksCount: 4 },
    { id: 3, message: "O yes!", liksCount: 4 },
  ],
  // newPostText: "",
  userProfile: null,
  status: "",
};

const profileReduser = (state = initialState, action) => {
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

export const addPostActionCreator = (post) => {
  return {
    type: ADD_POST,
    post,
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
    status,
  };
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
  });
};
export const updateUserStatusThunk = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setStatusActionCreator(status));
      console.log("Статус обновился")
    } else {
      console.log("Статус не обновился!!!!!!!")
    }
  });
};
