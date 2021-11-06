import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import state from "./components/redux/redux";
import { BrowserRouter } from "react-router-dom";
import {addPost, addDialogMessge, chageNewPostText, changeNewDialogMessage } from "./components/redux/redux";

const rerender = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} addDialogMessge={addDialogMessge} chageNewPostText={chageNewPostText} changeNewDialogMessage={changeNewDialogMessage}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

export default rerender;