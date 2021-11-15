import React from 'react';
import s from "./User.module.css";
import userAvatar from "../../img/avatar.jpeg";

const User = (props) => {
  console.log("UUU", props)
  return (
    <div className={s.container}>
      <img className={s.avatar} src={props.photos.small === null ? userAvatar : props.photos.small } alt="avatar" />
      <h2>{props.name}</h2>
      {/* <p>{props.userInfo.country}{props.userInfo.town}</p> */}
      {/* <p>{props.userAbout}</p> */}
      {props.followed ? 
      <button type="button" onClick={props.handlUnfollow}>Unfollow</button> : <button type="button" onClick={props.handFollow}>Follow</button>}
    </div>
  )
};

export default User;
