import {usersAPI} from "../api";


const ADD_POST = "ADD_POST";
const CHANGE_NEW_POS_TEXT = "CHANGE_NEW_POS_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  posts: [
    { id: 1, message: "Hey averywone!", liksCount: 4 },
    { id: 2, message: "Perfect day today...", liksCount: 4 },
    { id: 3, message: "O yes!", liksCount: 4 },
  ],
  newPostText: "",
  userProfile: null
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

export const getUserProfileThunk = (id, setLoading) => (dispatch) => {
  usersAPI.getProfile(id).then((data) => {
    dispatch(setUserProfileActionCreator(data));
    setLoading(false);
  });
}