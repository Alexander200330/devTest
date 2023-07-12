import React from 'react';
import logo from '../../public/logo.png';

const Header = ({ onSearchChange }) => {
  return (
    <header className="header">
      <div className="logoContainer">
        <img src={logo} alt="Logo de la empresa" className="logo" />
      </div>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Filtrar por side"
          className="searchInput"
          onChange={onSearchChange}
        />
      </div>
    </header>
  );
};

export default Header;
