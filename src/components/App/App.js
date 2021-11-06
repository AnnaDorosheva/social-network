import React from 'react';
import s from "./App.module.css";
import Heder from "../Header/Header";
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import { Route } from 'react-router-dom';

const App = (props) => {

  return (
  
    <div className={s.container}>
    
      <Heder />
      <div className={s.body}>
        <Navbar/>
        <section className={s.profilePage}>
        <Route path="/profile" render= { () => <Profile profilePageState={props.state.profilePage} addPost={props.addPost} chageNewPostText={props.chageNewPostText}/> } />
        <Route path="/dialogs" render= { () => <Dialogs state={props.state.messagesPage} addDialogMessge={props.addDialogMessge} changeNewDialogMessage={props.changeNewDialogMessage}/> } />
        </section>
      </div>
    </div>
  
  )
};

export default App;
