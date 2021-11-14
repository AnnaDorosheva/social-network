import React from 'react';
import s from "./User.module.css";

const User = (props) => {
  return (
    <div className={s.container}>
      <img className={s.avatar} src="https://www.blast.hk/attachments/64804/" alt="avatar" />
      <h2>{props.name}</h2>
      <p>{props.userInfo.country}{props.userInfo.town}</p>
      <p>{props.userAbout}</p>
      <button type="button">Follow</button>
    </div>
  )
};

export default User;
