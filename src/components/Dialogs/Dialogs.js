import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from "./Dialogs.module.css";
import DialogText from './DialogText/DialogText';

const Dialogs = () => {
  return (
    <div className={s.dialogPage}>
      <ul className={s.dialogUsers}>
        <li className={s.userItem}>
          <img src="https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka.jpg" alt="avatar" width="30px" />
          <NavLink to="/dialogs/1" activeClassName={s.activeLink} >Anna</NavLink>
        </li>
        <li className={s.userItem}>
          <img src="https://vsekidki.ru/uploads/posts/2016-08/1470735121_lecdaa3axdc.jpg" alt="avatar" width="30px" />
          <NavLink to="/dialogs/2" activeClassName={s.activeLink} >Dima</NavLink>
        </li>
        <li className={s.userItem}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT23pygNK5BeDGhj88DN6qfpSg0pMb78Tlo9A&usqp=CAU" alt="avatar" width="30px" />
          <NavLink to="/dialogs/3" activeClassName={s.activeLink} >Lena</NavLink>
        </li>
        <li className={s.userItem}>
          <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="avatar" width="30px" />
          <NavLink to="/dialogs/4" activeClassName={s.activeLink} >Oleg</NavLink>
        </li>
        <li className={s.userItem}>
          <img src="https://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg" alt="avatar" width="30px" />
          <NavLink to="/dialogs/5" activeClassName={s.activeLink} >Kolya</NavLink>
        </li>
        <li className={s.userItem}>
          <img src="https://cspromogame.ru//storage/upload_images/avatars/1299.jpg" alt="avatar" width="30px" />
          <NavLink to="/dialogs/6" activeClassName={s.activeLink} >Vova</NavLink>
        </li>
      </ul>
      <div className={s.dialogWindow}>
      <ul>
<DialogText text="Hello!!!" id="1"/>
<DialogText text="How are you?" id="2"/>
      </ul>
      <div className={s.textarea}>
      <textarea placeholder="Enter yor message..."></textarea>
      <button type="submit">Add message</button>
      </div>
    
      </div>
    </div>
  )
};

export default Dialogs;
