import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.nav}>
<ul className={s.navigation}>
  <li><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></li>
  <li><NavLink to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink></li>
  <li><NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink></li>
  <li><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></li>
  <li><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></li>
</ul>
    </div>
  )
};

export default Navbar;
