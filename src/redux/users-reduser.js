const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const IS_LOADING = "IZ_LOADING";
const TOGGLE_IN_FOLLOWING_PROGRESS = "TOGGLE_IN_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 43,
  activePage: 1,
  isLoading: true,
  followingInProgress: [],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: [
          ...state.users.map((user) =>
            user.id === action.userId
              ? { ...user, followed: true }
              : { ...user }
          ),
        ],
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: [
          ...state.users.map((user) =>
            user.id === action.userId
              ? { ...user, followed: false }
              : { ...user }
          ),
        ],
      };
    }
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        activePage: action.activePage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case TOGGLE_IN_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter((id) => id !== action.id),
      };
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
    users,
  };
};

export const setCurrentPageActionReduser = (numPage) => {
  return {
    type: SET_CURRENT_PAGE,
    activaPage: numPage,
  };
};

export const setTotalUsersActionReduser = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  };
};

export const isLoadingActionCreator = (isLoadingActive) => {
  return {
    type: IS_LOADING,
    isLoading: isLoadingActive,
  };
};

export const isFollowingInProgressActionCreator = (isFatching, id) => {
  return {
    type: TOGGLE_IN_FOLLOWING_PROGRESS,
    followingInProgress: isFatching,
    id
  };
};
