import React from "react";
import s from "./App.module.css";
import Navbar from "../Navbar/Navbar";
import { Route } from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "../Header/HeaderContainer";
import StartPage from "../StartPage/StartPage";
import Login from "../Login/Login";

const App = (props) => {
  return (
    <div className={s.container}>
      <HeaderContainer />
      <div className={s.body}>
        <Navbar />
        <section className={s.profilePage}>
          <Route path="/social-network/" exact component={StartPage} />
          <Route
            path="/profile/:userId?"
            render={() => <ProfileContainer store={props.store} />}
          />
          <Route
            path="/dialogs"
            render={() => <DialogsContainer store={props.store} />}
          />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" component={Login} />
        </section>
      </div>
    </div>
  );
};

export default App;
