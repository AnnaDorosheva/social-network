import React from 'react';
import s from "./App.module.css";
import Heder from "../Header/Header";
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import { Route } from 'react-router-dom';

const App = (prpops) => {
  return (
  
    <div className={s.container}>
    
      <Heder />
      <div className={s.body}>
        <Navbar/>
        <section className={s.profilePage}>
        <Route path="/profile" component={Profile} />
        <Route path="/dialogs" component={Dialogs} />
        </section>
      </div>
    </div>
  
  )
};

export default App;
