import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Wrapper, Title, Success, Error } from './styled';
import Input from '../UI/Input';
import Button from '../UI/Button';

import UserActions from '../../store/user/actions';
import { AppState } from '../../store/rootReducer';
import { ProfileEvent } from '../../types';

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  const { error, success, newFirstName, newLastName } = useSelector((state: AppState) => state.user);

  const handlerSubmitProfile = useCallback(({ firstName: newFirstName, lastName: newLastName}) => {
    dispatch(UserActions.upDateProfile({ firstName: newFirstName, lastName: newLastName}))
  }, [dispatch]);

  if(success !== ''){
    setTimeout(() => {
      window.location.reload()
      history.push('/')
    }, 1000)
  };

  const handleChangeInput = (event: ProfileEvent) => {
    const { name, value } = event.target;
    dispatch(UserActions.changeInput({name, value }))
  };

  return (
    <>
    <Success>{success}</Success>
    <Error>{error}</Error>
    <Wrapper>
      <Title>Profile</Title>
      <Input 
        name="newFirstName"
        type="text" 
        value={newFirstName} 
        // value={firstName} 
        placeholder="firstName"
        onChange={e => handleChangeInput(e)}
        />
      <Input 
        name="newLastName"
        type="text" 
        // value={lastName} 
        value={newLastName} 
        placeholder="lastName"
        onChange={e => handleChangeInput(e)}
      />
        <Button onClick={() => handlerSubmitProfile({ firstName: newFirstName, lastName: newLastName})}>Save</Button>
    </Wrapper>
    </>
  );
};

export default Profile;
// export default withRouter(Profile);