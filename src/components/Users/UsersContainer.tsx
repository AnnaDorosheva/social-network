import { Component } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator,
} from "../../redux/users-reduser";
import LoaderSpinner from "../../helpers/LoaderSpinner/LoaderSpinner";
import {
  getActivePage,
  getFollowindInProgress,
  getIsUserActive,
  getPageSize,
  getTooalUsersCount,
  getUsers,
} from "../../redux/users-selectors";
import { UserType } from "../../types/typtes";
import { AppStateType } from "../../redux/redux-store";

type MapStateToPropsType = {
  users: Array<UserType>
  totalUsersCount: number
  isFollovingToggle: Array<number>
  activePage: number
  pageSize: number
  isLoading: boolean
};

type MapDispatchToPropsType = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  requestUsers: (activePage: number, pageSize: number) => void
};

type OwnPropsType = {
  handlePageChange: (e: React.SyntheticEvent, p: number)=> void
};

type PropsType = MapDispatchToPropsType & MapStateToPropsType & OwnPropsType;
class UsersContainer extends Component<PropsType> {
  componentDidMount() {
    const { activePage, pageSize } = this.props;
    this.props.requestUsers(activePage, pageSize);
  };

  handlePageChange = (e: React.SyntheticEvent, p: number) => {
    // const { target } = e;
    // target.style = "font-weight: 700;";

    this.props.requestUsers(p, this.props.pageSize);
  };

  render() {
    // console.log(this.props)
    return (
      <div>
        {this.props.isLoading ? <LoaderSpinner /> : null}
        <Users { ...this.props} handlePageChange={this.handlePageChange} />
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     users: state.usersReduser.users,
//     pageSize: state.usersReduser.pageSize,
//     totalUsersCount: state.usersReduser.totalUsersCount,
//     activePage: state.usersReduser.activePage,
//     isLoading: state.usersReduser.isLoading,
//     isFollovingToggle: state.usersReduser.followingInProgress,
//   };
// };

const mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTooalUsersCount(state),
    activePage: getActivePage(state),
    isLoading: getIsUserActive(state),
    isFollovingToggle: getFollowindInProgress(state),
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlFollow: (id) => {
//       dispatch(followActionCreator(id));
//     },
//     handlUnfollow: (id) => {
//       dispatch(unfollowActionCreator(id));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setActivePage: (pageNum) => {
//       dispatch(setCurrentPageActionReduser(pageNum));
//     },
//     setTotalUsers: (usersTotal) => {
//       dispatch(setTotalUsersActionReduser(usersTotal));
//     },
//     setLoading: (isLoadingActive) => {
//       dispatch(isLoadingActionCreator(isLoadingActive))
//     }
//   };
// };

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
  requestUsers: getUsersThunkCreator,
  follow: followThunkCreator,
  unfollow: unfollowThunkCreator,
})(UsersContainer);
