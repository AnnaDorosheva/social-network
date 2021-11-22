import React from 'react';
import s from './StartPage.module.css';

const StartPage = () => {
  return (
    <div className={s.startImg}>
      <h2 className={s.welcome}>Welcome to our community!</h2>
      <img src="https://i.natgeofe.com/n/4e57f727-4dfd-4f7d-9c27-9edd6f73cfd0/miami-travel_16x9.jpg" alt="startphoto" className={s.startpfoto} />
    </div>
  )
}

export default StartPage;
