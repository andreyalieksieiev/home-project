import React from 'react';
import { Link } from 'react-router-dom';

import setting from '../../../assets/images/setting.png';
import { Wrapper, Setting, Img, Name, Age, Gender, EyeColor, Id } from './styled';

const UserCards = ({ name, age, gender, eye_color, id }) => {

  return (
    <Wrapper >
      <Setting>
        <Name>{name}</Name>
        <Link to={{pathname: `users/card/?id=${id}`, state: {id}}}>
          <Img src={setting} alt="img" />
        </Link>
      </Setting>
      <Age>{`age: ${age}`}</Age>
      <EyeColor>{`eye_color: ${eye_color}`}</EyeColor>
      <Gender>{`gender: ${gender}`}</Gender>
      <Id>{`id: ${id}`}</Id>
    </Wrapper>
  );
};

export default UserCards;