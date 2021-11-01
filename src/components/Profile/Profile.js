import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={s.prolile}>
      <div className={s.containerImg} >
       </div>
    <div>Ava + name</div>
    <MyPosts/>
    
    </div>
  )
};

export default Profile;
