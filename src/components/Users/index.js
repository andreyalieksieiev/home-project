import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Wrapper, Spin } from './styled';
import Spinner from '../../components/UI/Spinner';
import UserActions from '../../store/user/actions';
import UserCards from './UserCards';

const Users = () => {
  const dispatch = useDispatch();
  const { isLoading, allUsers } = useSelector((state) => state.user);

  const currentUser = allUsers && allUsers.map(el => 
    <UserCards name={el.name} id={el.id} age={el.age} gender={el.gender} eye_color={el.eye_color} /> )
  
  useEffect(() => {
    dispatch(UserActions.getUserCard())
  }, [dispatch]);

  if(isLoading) {
    return (
      <Spin>
        <Spinner />
      </Spin>
    )
  }

  return (
    <Wrapper>
      {currentUser}
    </Wrapper>
  );
};

export default Users;