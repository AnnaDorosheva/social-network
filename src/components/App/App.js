import React from 'react';
import s from "./App.module.css";
import Heder from "../Header/Header";
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import { Route } from 'react-router-dom';
import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';

const App = (props) => {

  return (
  
    <div className={s.container}>
    
      <Heder />
      <div className={s.body}>
        <Navbar/>
        <section className={s.profilePage}>
        <Route path="/profile" render= { () => <Profile store={props.store}/> } />
        <Route path="/dialogs" render= { () => <DialogsContainer store={props.store}/> } />
        <Route path="/users" render= { () => <UsersContainer/>} />
        </section>
      </div>
    </div>
  
  )
};

export default App;
