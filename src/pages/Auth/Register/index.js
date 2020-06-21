import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Wrapper, Title, Error, Success, Spin } from './styled'; 
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import Spinner from '../../../components/UI/Spinner';

import AuthActions from '../../../store/auth/actions';

const Register = () => {

  const dispatch = useDispatch();
  const { firstName, lastName, email, password, success, error, isLoading } = useSelector((state) => state.auth) 
  
  const handlerSubmitRegister = useCallback((firstName, lastName, email, password) => {
     dispatch(AuthActions.register({ firstName, lastName, email, password })) 
  }, [dispatch])

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    dispatch(AuthActions.changeInput({name, value }))
  }

  if(isLoading) {
    return (
      <Spin>
        <Spinner />
      </Spin>
    )
  }

  return (
    <>
      <Success>{success || ''}</Success>
      <Error>{error || ''}</Error>
      <Wrapper>
        <Title>Registration</Title>
        <Input 
          name="firstName"
          type="text" 
          value={firstName} 
          placeholder="FirstName"
          onChange={e => handleChangeInput(e)}
        />
        <Input 
          name="lastName"
          type="text" 
          value={lastName} 
          placeholder="LastName"
          onChange={e => handleChangeInput(e)}
        />
        <Input 
          name="email"
          type="email" 
          value={email} 
          placeholder="Email"
          onChange={e => handleChangeInput(e)}
        />
        <Input 
          name="password"
          type="password" 
          value={password} 
          placeholder="Password"
          onChange={e => handleChangeInput(e)}
        />
        <Button onClick={() => handlerSubmitRegister(firstName, lastName, email, password)}>Submit</Button>
        <Link to="/">Signin</Link>
      </Wrapper>
    </>
  );
};

export default Register;

