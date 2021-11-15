
const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

const initialState = {
    users: [
      // { id: 1, name: "Dima", userAbout: "I am cool!", avatar: "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png", userInfo: {country: "Ukraine", town: "Kiev"}, follow: true },
      // { id: 2, name: "Lena", userAbout: "Life is butiful!", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3ThUKB-Lw6wp_Z0Kdyq7Bh7lX0xbjAwysQ&usqp=CAU", userInfo: {country: "German", town: "Keln"}, follow: false },
      // { id: 3, name: "Olga",  userAbout: "Hey averywone!", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnaxTHwg_Ae4GYwlXE-fnCV3fegAidJ3evg&usqp=CAU", userInfo: {country: "Russia", town: "Moskov"}, follow: true },
      // { id: 4, name: "Alex",  userAbout: "Aloha!", avatar: "https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg", userInfo: {country: "USA", town: "Miami", follow: false }},
      // { id: 5, name: "Bruno", userAbout: "By happy, dont worry!", avatar: "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg", userInfo: {country: "Cyprus", town: "Limassol"}, follow: true },
    ],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: [...state.users.map(user => user.id === action.userId ? {...user, followed: true} : {...user})]
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: [...state.users.map(user => user.id === action.userId ? {...user, followed: false} : {...user})]
      }
    }
    case SET_USERS :
return {
  ...state,
  users: [...state.users, ...action.users]
}
    default:
      return state;
  }
};

export default usersReduser;

export const followActionCreator = (id) => {
  return {
    type: FOLLOW,
    userId: id,
  };
};
export const unfollowActionCreator = (id) => {
  return {
    type: UNFOLLOW,
    userId: id,
  };
};

export const setUsersActionCreator = (users) => {
    return {
      type: SET_USERS,
      users
    }
}