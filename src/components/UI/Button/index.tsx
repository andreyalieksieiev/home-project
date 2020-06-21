import React from 'react';

import styled from 'styled-components';
import { ButtonProps } from '../../../types';

const StyleButton = styled.button`
  height: 40px;
  width: 80px;
  color: black;
  margin: 20px 40%;
`;

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  // console.log('children: ',typeof children);
  return (
    <StyleButton onClick={onClick}>{children}</StyleButton>
  )
};

export default Button;