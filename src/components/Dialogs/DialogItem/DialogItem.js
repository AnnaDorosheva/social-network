import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
  const path =`/dialogs/${props.id}`;
  return (
    <li className={s.userItem} key={props.id}>
          <img src={props.img} alt="avatar" width="30px" />
          <NavLink to={path} activeClassName={s.activeLink} >{props.name}</NavLink>
        </li>
  )
};

export default DialogItem;
