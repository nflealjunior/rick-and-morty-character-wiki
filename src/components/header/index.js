import React from 'react';
import './header.scss';
import logo from '../../assets/images/rick-and-morty-logo.png';

function Header() {

  return (
    <div className="header-component">
      <img alt="rick-and-morty-logo" src={logo} className="logo"/>
      <h1 className="title">Character Wiki</h1>
    </div>
  );
}

export default Header;