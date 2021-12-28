import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserDataThunk, logout } from "../../redux/auth-reduser";


class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthUserDataThunk();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReduser.isAuth,
    login: state.authReduser.login,
  };
};

export default connect(mapStateToProps, { getAuthUserDataThunk, logout })(
  HeaderContainer
);
