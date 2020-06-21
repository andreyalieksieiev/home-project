import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Wrapper, WrapperMenu, MenuLink, Logout, Name, Li } from './styled';
import { AppState } from '../../store/rootReducer';

const Menu = () => {
  const [showModal, setShowModal] = useState(false);
  const { firstName, lastName } = useSelector((state: AppState) => state.user);

  const handlerClick = () => {
    localStorage.removeItem('token');
    window.location.reload()
  };

  return (
    <>
      <Wrapper onClick={() => setShowModal(!showModal)}>
        <WrapperMenu>Menu</WrapperMenu>
        <Name>{firstName} {lastName}</Name>
      </Wrapper>
        {showModal ? (
          <MenuLink onClick={() => setShowModal(!showModal)}>  
            <Li>
              <Logout onClick={handlerClick}>
                Logout
              </Logout>
            </Li>
            <Li>
              <NavLink to="profile">
                Profile
              </NavLink>
            </Li>
            <Li>
              <NavLink to="users">
                Users
              </NavLink>
            </Li>  
            <Li>
              <NavLink to="cats">
                Cats
              </NavLink>
            </Li>
            <Li>
              <NavLink to="country">
                Country
              </NavLink>
            </Li>  
            <Li>
              <NavLink to="/country/delay">
                DelayCountry
              </NavLink>
            </Li>                        
          </MenuLink>
        ) : null}
    </>
  );
};

export default Menu;