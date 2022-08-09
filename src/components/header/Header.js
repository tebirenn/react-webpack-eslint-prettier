import React from 'react';
import {HeaderStyle} from './headerStyle';
import HeaderNav from '../header-nav/HeaderNav';
import HeaderInfo from '../header-info/HeaderInfo';

function Header() {
  return (
    <HeaderStyle>
      <HeaderNav />
      <HeaderInfo />
    </HeaderStyle>
  );
}

export default Header;
