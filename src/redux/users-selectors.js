export const getUsers = (state) => {
    return state.usersReduser.users;
};

export const getPageSize = (state) => {
    return state.usersReduser.pageSize;
};

export const getTooalUsersCount = (state) => {
    return state.usersReduser.totalUsersCount;
};

export const getActivePage = (state) => {
    return state.usersReduser.activePage;
};

export const getIsUserActive = (state) => {
    return state.usersReduser.isLoading;
};

export const getFollowindInProgress = (state) => {
    return state.usersReduser.followingInProgress;
};