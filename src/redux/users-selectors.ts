import { AppStateType } from "./redux-store";

export const getUsers = (state: AppStateType) => {
    return state.usersReduser.users;
};

export const getPageSize = (state: AppStateType) => {
    return state.usersReduser.pageSize;
};

export const getTooalUsersCount = (state: AppStateType) => {
    return state.usersReduser.totalUsersCount;
};

export const getActivePage = (state: AppStateType) => {
    return state.usersReduser.activePage;
};

export const getIsUserActive = (state: AppStateType) => {
    return state.usersReduser.isLoading;
};

export const getFollowindInProgress = (state: AppStateType) => {
    return state.usersReduser.followingInProgress;
};