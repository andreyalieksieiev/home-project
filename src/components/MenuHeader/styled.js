import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin-top: 30px;
`;

export const WrapperMenu = styled.p`
  font-size: 18px;
`;

export const MenuLink = styled.ul`
  max-width: 140px; 
  width: 100%;
  background-color:  #c68a53;
  position: absolute;
  top: 80px;
  right: 20px;
  a {
    /* font-size: 16px; */
    font-weight: normal;
  }
  a:hover{
    color: #a64dff;
  }
  p:hover {
    color: #a64dff;
  }
`;

export const Logout = styled.p`
  cursor: pointer;
`;

export const Name = styled.p`
  color: red;
  margin-top: -15px;
`;

export const Li = styled.li`
  list-style: none;
  margin: 25px 10px;
`;

