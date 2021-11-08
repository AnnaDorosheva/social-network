import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.prolile}>
      <div className={s.containerImg} >
       </div>
    <ProfileInfo />
    <MyPosts posts={props.profilePageState.posts} postText={props.profilePageState.newPostText}  dispatch={props.dispatch}/>
    
    </div>
  )
};

export default Profile;
