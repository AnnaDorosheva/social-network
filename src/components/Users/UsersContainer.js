
import { connect } from 'react-redux';
import Users from "./Users";
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../redux/users-reduser';

const mapStateToProps = (state) => {
  return {
users: state.usersReduser.users
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
}
}
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
