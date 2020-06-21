import React from 'react';

import styled from 'styled-components';
import { InputProps } from '../../../types';

const StyleInput = styled.input`
  width: 80%;
  min-height: 30px;
  margin: 10px 30px;
  border-radius: 2px;
  padding-left: 4px;
`; 

const Input: React.FC<InputProps> = ({ name, type, value, onChange, placeholder}) => {
  return (
    <StyleInput 
      name={name}
      type={type} 
      value={value} 
      onChange={onChange}
      placeholder={placeholder}
      />
  );
};

export default Input;