import React from 'react';
import logo from '../../public/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logoContainer">
        <img src={logo} alt="Logo de la empresa" className="logo" />
      </div>

    </header>
  );
};

export default Header;
