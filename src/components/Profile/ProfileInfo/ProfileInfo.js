import React from 'react';
import LoaderSpinner from '../../../helpers/LoaderSpinner/LoaderSpinner';
import avatarka from "../../../helpers/img/avatar.jpeg";
import s from "./PrifileInfo.module.css";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({userProfile, userStatus, updateStatus}) => {
  if(!userProfile) {
    return <LoaderSpinner />
  };
 

  return (
    <div className={s.profile}>
      <div className={s.avatar}>
      <img  src={userProfile.photos.large ? userProfile.photos.large : avatarka} alt="avatar" />
      </div>
      <div className={s.info}>
      <h2 className={s.name}>{userProfile.fullName}</h2>
      <ProfileStatus status={userStatus} updateStatus={updateStatus}/>
      <p>{userProfile.contacts.facebook}</p>
      <p>{userProfile.contacts.vk}</p>
      <p>{userProfile.contacts.facebook}</p>
      </div>
    </div>
  )
};

export default ProfileInfo;
