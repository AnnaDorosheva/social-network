import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import store from "./components/redux/redux-store";


const rerenderApp = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)}  store={store}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderApp(store.getState());

store.subscribe(() => {
  let state = store.getState();
  // console.log(state);
  rerenderApp(state);
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
