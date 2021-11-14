

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const initialState = {
    users: [
      { id: 1, name: "Dima", userAbout: "I am cool!", avatar: "", userInfo: {country: "Ukraine", town: "Kiev", follow: true} },
      { id: 2, name: "Lena", userAbout: "Life is butiful!", avatar: "", userInfo: {country: "German", town: "Keln", follow: false} },
      { id: 3, name: "Olga",  userAbout: "Hey averywone!", avatar: "", userInfo: {country: "Russia", town: "Moskov", follow: true} },
      { id: 4, name: "Alex",  userAbout: "Aloha!", avatar: "", userInfo: {country: "USA", town: "Miami", follow: false }},
      { id: 5, name: "Bruno", userAbout: "By happy, dont worry!", avatar: "", userInfo: {country: "Cyprus", town: "Limassol", follow: true} },
    ],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      
      // const newPost = {
      //   id: 6,
      //   message: state.newPostText,

      //   liksCount: 3,
      // };
      const stateCopy = {
        ...state,
 
      };

      return stateCopy;
    }
    case UNFOLLOW: {
      const stateCopy = {
        ...state,
     
      }
    
      return stateCopy;
    }
    default:
      return state;
  }
};

export default usersReduser;

export const followActionCreator = () => {
  return {
    type: FOLLOW,
  };
};
export const unfollowActionCreator = () => {
  return {
    type: UNFOLLOW,
  };
};