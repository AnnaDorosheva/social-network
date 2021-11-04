import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from "./Dialogs.module.css";
import DialogText from './DialogText/DialogText';

const dialogsUsers = [
  { id:1, name: "Anna", img: "https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka.jpg"},
  { id:2, name: "Dima", img: "https://vsekidki.ru/uploads/posts/2016-08/1470735121_lecdaa3axdc.jpg"},
  { id:3, name: "Lena", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT23pygNK5BeDGhj88DN6qfpSg0pMb78Tlo9A&usqp=CAU"},
  { id:4, name: "Oleg", img: "https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"},
  { id:5, name: "Kolya", img: "https://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg"},
  { id:6, name: "Vova", img: "https://cspromogame.ru//storage/upload_images/avatars/1299.jpg"},
];

const dialogUserMessages = [
  { id: 1, message: "Hello!!!"},
  { id: 2, message: "How are you?"},
  { id: 3, message: "I am fine:)"},
]
const Dialogs = (props) => {

  const dialogsNames = props.state.dialogsUsers.map((user) => ( <DialogItem {...user}/>));
  const dialogsMessages = props.state.dialogUserMessages.map( m => < DialogText {...m}/>)
  return (
    <div className={s.dialogPage}>
      <ul className={s.dialogUsers}>
      { dialogsNames 
      }
        {/* <DialogItem name="Lena" id="7" img="https://vsekidki.ru/uploads/posts/2016-08/1470735121_lecdaa3axdc.jpg"/>
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
        </li> */}
      </ul>
      <div className={s.dialogWindow}>
      <ul>
{dialogsMessages }
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
