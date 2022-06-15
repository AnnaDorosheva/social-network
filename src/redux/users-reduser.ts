// import { unfollowActionCreator } from './users-reduser';
import { AppStateType } from './redux-store';
import { usersAPI } from "../api";
import { UserType } from "../types/typtes";
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const IS_LOADING = "IZ_LOADING";
const TOGGLE_IN_FOLLOWING_PROGRESS = "TOGGLE_IN_FOLLOWING_PROGRESS"; 


const initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 43,
  activePage: 1,
  isLoading: true,
  followingInProgress: [] as Array<number> //as array of users id
};

type InitialStateType = typeof initialState;

const usersReduser = (state = initialState, action: ActionsType) : InitialStateType => {
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

type ActionsType = FollowActionCreatorType | UnfollowActionCreatorType | SetCurrentPageActionReduserType | SetUsersActionCreatorType | SetTotalUsersActionReduserType | IsLoadingActionCreatorType | IsFollowingInProgressActionCreatorType

export default usersReduser;

type FollowActionCreatorType = {
type: typeof FOLLOW
userId: number
};
export const followActionCreator = (id : number) : FollowActionCreatorType => {
  return {
    type: FOLLOW,
    userId: id,
  };
};

type UnfollowActionCreatorType = {
  type: typeof UNFOLLOW
  userId: number
  };
export const unfollowActionCreator = (id : number) : UnfollowActionCreatorType => {
  return {
    type: UNFOLLOW,
    userId: id,
  };
};

type SetUsersActionCreatorType = {
  type: typeof SET_USERS
  users: Array<UserType>
  };
export const setUsersActionCreator = (users : Array<UserType>) : SetUsersActionCreatorType => {
  return {
    type: SET_USERS,
    users,
  };
};

type SetCurrentPageActionReduserType = {
  type: typeof SET_CURRENT_PAGE
  activePage: number
  };
export const setCurrentPageActionReduser = (numPage : number) : SetCurrentPageActionReduserType => {
  return {
    type: SET_CURRENT_PAGE,
    activePage: numPage,
  };
};

type SetTotalUsersActionReduserType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalUsersCount: number
  };
export const setTotalUsersActionReduser = (totalUsersCount : number) : SetTotalUsersActionReduserType => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  };
};

type IsLoadingActionCreatorType = {
  type: typeof IS_LOADING
  isLoading: boolean
  };
export const isLoadingActionCreator = (isLoadingActive : boolean) : IsLoadingActionCreatorType => {
  return {
    type: IS_LOADING,
    isLoading: isLoadingActive,
  };
};

type IsFollowingInProgressActionCreatorType = {
  type: typeof TOGGLE_IN_FOLLOWING_PROGRESS
  followingInProgress: boolean
  id: number
  };
export const isFollowingInProgressActionCreator = (isFatching : boolean, id : number) : IsFollowingInProgressActionCreatorType => {
  return {
    type: TOGGLE_IN_FOLLOWING_PROGRESS,
    followingInProgress: isFatching,
    id,
  };
};


type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsType>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getUsersThunkCreator = (activePage : number, pageSize : number) : ThunkType => {
  return async (dispatch : DispatchType, getState: GetStateType ) => {
    dispatch(isLoadingActionCreator(true));
    dispatch(setCurrentPageActionReduser(activePage));

   let response = await usersAPI.getUsers(activePage, pageSize)
      dispatch(setUsersActionCreator(response.data.items));
      dispatch(isLoadingActionCreator(false));
      dispatch(setTotalUsersActionReduser(response.data.totalCount));
  };
};

// выносим общий код, что бы не было дублирования:
const _followUnfollowFlow = async (dispatch : DispatchType, id : number, apiMethod : any, actionCreator : (id: number) => FollowActionCreatorType | UnfollowActionCreatorType) => {
  dispatch(isFollowingInProgressActionCreator(true, id));
  let response = await apiMethod(id);

    if (response.data.resultCode === 0) {
      dispatch(actionCreator(id));
    }
    dispatch(isFollowingInProgressActionCreator(false, id));
}; 

// ThunkCreators
export const followThunkCreator = (id : number) : ThunkType => {
  return async (dispatch) => {

    let apiMethod = usersAPI.followUser.bind(usersAPI);
    let actionCreator = followActionCreator;

    _followUnfollowFlow(dispatch, id, apiMethod, actionCreator);

    // dispatch(isFollowingInProgressActionCreator(true, id));
    // let response = await apiMethod(id);

    //   if (response.data.resultCode === 0) {
    //     dispatch(actionCreator(id));
    //   }
    //   dispatch(isFollowingInProgressActionCreator(false, id));
  };
};

export const unfollowThunkCreator = (id : number) : ThunkType => {
  return async (dispatch ) => {

    let apiMethod = usersAPI.unfollowUser.bind(usersAPI);
    let actionCreator = unfollowActionCreator;

    _followUnfollowFlow(dispatch, id, apiMethod, actionCreator);

    // dispatch(isFollowingInProgressActionCreator(true, id));
    // let response = await apiMethod(id);

    //   if (response.data.resultCode === 0) {
    //     dispatch(actionCreator(id));
    //   }
    //   dispatch(isFollowingInProgressActionCreator(false, id));
  };
};
