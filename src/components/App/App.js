import React, { Component } from "react";
import s from "./App.module.css";
import Navbar from "../Navbar/Navbar";
import { Route } from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer";
import StartPage from "../StartPage/StartPage";
import Login from "../Login/Login";
import getAuthUserDataThunk from "../../redux/auth-reduser";
import { initializeAPP } from "../../redux/app-reduser";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import LoaderSpinner from "../../helpers/LoaderSpinner/LoaderSpinner";

class App extends Component {

  componentDidMount() {
    this.props.initializeAPP();
  }

  render() {
    const { initialized } = this.props;

    if (!initialized) return <LoaderSpinner />;

    return (
      <div className={s.container}>
        <HeaderContainer />
        <div className={s.body}>
          <Navbar />
          <section className={s.profilePage}>
            <Route exact path="/social-network" component={StartPage} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer store={this.props.store} />}
            />
            <Route
              path="/dialogs"
              render={() => <DialogsContainer store={this.props.store} />}
            />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" component={Login} />
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.appReduser.initialized,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeAPP })
)(App);
