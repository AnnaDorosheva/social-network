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

class UsersContainer extends Component {
  componentDidMount() {
    this.props.requestUsers(this.props.activePage, this.props.pageSize);
  }

  handlePageChange = (e, p) => {
    e.target.style = "font-weight: 700;";

    this.props.requestUsers(p, this.props.pageSize);
  };

  render() {
    // console.log(this.props)
    return (
      <div>
        {this.props.isLoading ? <LoaderSpinner /> : null}
        <Users {...this.props} handlePageChange={this.handlePageChange} />
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

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, {
  requestUsers: getUsersThunkCreator,
  follow: followThunkCreator,
  unfollow: unfollowThunkCreator,
})(UsersContainer);
