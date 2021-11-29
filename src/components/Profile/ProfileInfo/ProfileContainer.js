import React, { Component } from "react";
import Profile from "../Profile";
import { connect } from "react-redux";
import { getUserProfileThunk } from "../../../redux/profile-reduser";
import { isLoadingActionCreator } from "../../../redux/users-reduser";
import { withRouter } from "react-router";
import LoaderSpinner from "../../../helpers/LoaderSpinner/LoaderSpinner";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.setLoading(true);
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    this.props.getUserProfile(userId, this.props.setLoading );
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
    isLoading: state.usersReduser.isLoading
  };
};


// export default connect(mapStateToProps, {
//   setLoading: isLoadingActionCreator,
//   getUserProfile: getUserProfileThunk
// })(WithRouturerProfileContainer);

export default compose(
  connect(mapStateToProps, {
    setLoading: isLoadingActionCreator,
    getUserProfile: getUserProfileThunk
  }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer)