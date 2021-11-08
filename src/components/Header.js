import React from 'react';
import logo from './images/logo.svg';
/* Header block gives a logo and slogan */
function Header() {

  return (
    <header className="app-header">
      <a href="/" title="Home page">
        <img src={logo} className="app-header__logo" alt="logo" />
      </a>
      <h2 className="app-header__slogan">A long time ago in a galaxy far, far away...</h2>
    </header>
  )
}

export default Header
