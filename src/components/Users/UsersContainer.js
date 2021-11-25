import { Component } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  setCurrentPageActionReduser,
  getUsrsThankCreator,
  followThankCreator,
  unfollowThankCreator
} from "../../redux/users-reduser";
import LoaderSpinner from "../../helpers/LoaderSpinner/LoaderSpinner";




class UsersContainer extends Component {
  componentDidMount() {

    this.props.getUsers(this.props.activePage, this.props.pageSize)

  }

  handlePageChange = (e, p) => {
    this.props.setActivePage(p);
    e.target.style = "font-weight: 700;";

    this.props.getUsers(p, this.props.pageSize)

  };

  render() {
    // console.log(this.props)
    return (
      <div>
        {this.props.isLoading ? <LoaderSpinner /> : null}
    <Users {...this.props} handlePageChange={this.handlePageChange} />
    </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.usersReduser.users,
    pageSize: state.usersReduser.pageSize,
    totalUsersCount: state.usersReduser.totalUsersCount,
    activePage: state.usersReduser.activePage,
    isLoading: state.usersReduser.isLoading,
    isFollovingToggle: state.usersReduser.followingInProgress,
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
  setActivePage: setCurrentPageActionReduser,
 getUsers: getUsrsThankCreator,
follow: followThankCreator,
unfollow: unfollowThankCreator
})(UsersContainer);
