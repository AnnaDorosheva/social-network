import React, { Component } from "react";
import Profile from "../Profile";
import { connect } from "react-redux";
import {
  getUserProfileThunk,
  getUserStatusThunk,
  updateUserStatusThunk 
} from "../../../redux/profile-reduser";
import { isLoadingActionCreator } from "../../../redux/users-reduser";
import { withRouter } from "react-router";
import LoaderSpinner from "../../../helpers/LoaderSpinner/LoaderSpinner";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.setLoading(true);
    console.log(this.props.match.params.userId,  this.props )
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.myId;
    }

    this.props.getUserProfile(userId, this.props.setLoading);
    this.props.getUserStatus(userId);
  }
  render() {
    return (
      <div>
        {this.props.isLoading ? <LoaderSpinner /> : null}
        <Profile {...this.props} userProfile={this.props.userProfile} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profileReduser.userProfile,
    isLoading: state.usersReduser.isLoading,
    status: state.profileReduser.status,
    myId: state.authReduser.userId
  };
};

export default compose(
  connect(mapStateToProps, {
    setLoading: isLoadingActionCreator,
    getUserProfile: getUserProfileThunk,
    getUserStatus: getUserStatusThunk,
    updateStatus: updateUserStatusThunk 
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
