import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img className={s.logo} src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?size=338&ext=jpg" alt="logo" />
   <div className={s.loinContainer}>
     {props.isAuth ? <div>{props.login} <button onClick={props.logout}>Logout</button></div> : <NavLink to="/login">LOGIN</NavLink>}

   </div>
    </header>
  )
};

export default Header;
