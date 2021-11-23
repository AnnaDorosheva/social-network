import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from "react-redux";
import {setUserLoginActionCreator} from "../../redux/auth-reduser";

class HeaderContainer extends Component {

  componentDidMount() {
    axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      }
    )
    .then((response) => {
     
      if(response.data.resultCode === 0) {
        const {id, email, login } = response.data.data;
        this.props.setUserLoginActionCreator(id, email, login);
      }
     
      // this.props.setLoading(false);
 
    });
  }
  render() {
    return (
<Header {...this.props}/>
    )
  }
};

const mapStateToProps = (state) => {
  return {
isAuth: state.authReduser.isAuth,
login: state.authReduser.login
  }
};

export default connect(mapStateToProps, {setUserLoginActionCreator})(HeaderContainer);