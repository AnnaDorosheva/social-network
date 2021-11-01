import React from 'react';
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?size=338&ext=jpg" alt="logo" />
    </header>
  )
};

export default Header;
