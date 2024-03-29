import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.prolile}>
      <div className={s.containerImg} >
       </div>
    <ProfileInfo userStatus={props.status} updateStatus={props.updateStatus} userProfile={props.userProfile}/>
    <MyPostsContainer store={props.store} />
    
    </div>
  )
};

export default Profile;
