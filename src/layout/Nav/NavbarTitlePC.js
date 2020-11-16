import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';

  export const NavbarTitlePC = () => {
    return (
      <div className="nav-title">
      <Link to="/" className="nav-titile-logo ">
          <Logo  className="logo__size-pc"/>
          <Logo  className="logo__size-sp"/>
      </Link>
    </div>
    )
  }

  export default NavbarTitlePC
