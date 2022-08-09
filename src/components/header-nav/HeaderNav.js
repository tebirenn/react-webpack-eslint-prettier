import React from 'react';
import {HeaderNavStyle} from './headerNavStyle';
import logo from '../../images/logo.png';
import search from '../../images/search-icon.png';

function HeaderNav() {
  return (
    <HeaderNavStyle>
      <div>
        <img src={logo} alt="" style={{cursor: 'pointer'}} />
      </div>
      <div>
        <a href={'a'}>Home</a>
        <a href={'a'}>Health</a>
        <a href={'a'}>Medicine</a>
        <a href={'a'}>News</a>
        <a href={'a'}>Client</a>
        <a href={'a'}>Contact Us</a>
        <img src={search} alt="" style={{cursor: 'pointer'}} />
      </div>
    </HeaderNavStyle>
  );
}

export default HeaderNav;
