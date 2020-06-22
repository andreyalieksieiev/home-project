import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Spinner from '../../UI/Spinner';
import { Wrapper, Name, Age, EyeColor, Gender, Id, Spin, Back } from './styled';

const Card = () => {
  const currentId = window.location.search.slice(4);
  const { allUsers, isLoading } = useSelector((state) => state.user);
  const oneCard = allUsers && allUsers.find(el => el.id === currentId)
  const { name, id, age, eye_color, gender } = oneCard;

  if(isLoading) {
    return (
      <Spin>
        <Spinner />
      </Spin>
    )
  }

  return (
    <Wrapper>
      <Name>{name}</Name>
      <Age>{`age: ${age}`}</Age>
      <EyeColor>{`eye color: ${eye_color}`}</EyeColor>
      <Gender>{`gender: ${gender}`}</Gender>
      <Id>{`id: ${id}`}</Id>
      <Link to="/users">
      <Back>back</Back>
      </Link>
    </Wrapper>
  );
};

export default Card;