import React, { Component } from 'react';
import Profile from '../Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfileActionCreator} from '../../../redux/profile-reduser';
import { withRouter } from 'react-router';

 class ProfileContainer extends Component {
  componentDidMount() {
  
    // this.props.setLoading(true);
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
    };
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/` + userId
      )
      .then((response) => {
        this.props.setUserProfile(response.data);
        // console.log(response.data)
        // this.props.setLoading(false);
      });
  }
  render() {
    return (
      <div>
        <Profile {...this.props} userProfile={this.props.userProfile}/>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
userProfile: state.profileReduser.userProfile
  }
};

const WithRouturerProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile: setUserProfileActionCreator})(WithRouturerProfileContainer);