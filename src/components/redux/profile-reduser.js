

const ADD_POST = "ADD_POST";
const CHANGE_NEW_POS_TEXT = "CHANGE_NEW_POS_TEXT";

const initialState = {
    posts: [
      { id: 1, message: "Hey averywone!", liksCount: 4 },
      { id: 2, message: "Perfect day today...", liksCount: 4 },
      { id: 3, message: "O yes!", liksCount: 4 },
    ],
    newPostText: "",
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 6,
        message: state.newPostText,
        liksCount: 3,
      };
      state.posts.push(newPost);
      state.newPostText = "";

      return state;
  
    case CHANGE_NEW_POS_TEXT:
      state.newPostText = action.newText;
    
      return state;
  
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