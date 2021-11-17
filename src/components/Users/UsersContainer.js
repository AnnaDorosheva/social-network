
import { connect } from 'react-redux';
import Users from "./Users";
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionReduser, setTotalUsersActionReduser } from '../redux/users-reduser';

const mapStateToProps = (state) => {
  return {
users: state.usersReduser.users,
pageSize: state.usersReduser.pageSize,
totalUsersCount: state.usersReduser.totalUsersCount,
activePage: state.usersReduser.activePage
  }

};

const mapDispatchToProps = (dispatch) => {
return {
handlFollow: (id) => {
dispatch(followActionCreator(id))
},
handlUnfollow: (id) => {
dispatch(unfollowActionCreator(id))
},
setUsers: (users) => {
  dispatch(setUsersActionCreator(users))
},
setActivePage: (pageNum) => {
  dispatch(setCurrentPageActionReduser(pageNum))
},
setTotalUsers: (usersTotal) => {
  dispatch(setTotalUsersActionReduser(usersTotal))
}
}
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
