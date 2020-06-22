import React from 'react';
import { NavLink } from 'react-router-dom';

import Menu from '../MenuHeader';

import { Wrapper } from './styled';

const Header: React.FC = () => {
  const token = localStorage.getItem('token');
 
  return (
    <Wrapper>
      <NavLink to="/">Header</NavLink>
      {token ? <Menu /> : null}
    </Wrapper>
  );
};

export default Header;
