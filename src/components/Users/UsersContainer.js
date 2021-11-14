
import { connect } from 'react-redux';
import Users from "./Users";

const mapStateToProps = (state) => {
  console.log("USERS", state)
  return {
users: state.usersReduser.users
  }

};

const mapDispatchToProps = (dispatch) => {
return {

}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
