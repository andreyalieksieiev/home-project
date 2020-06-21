import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Wrapper, Title, Error, WrapLink, Spin } from './styled';
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import Spinner from '../../../components/UI/Spinner';

import AuthActions from '../../../store/auth/actions';

const Login = () => {
  const dispatch = useDispatch();
  const {  email, password, error, isLoading, token } = useSelector((state) => state.auth);
  
  const handlerSubmitLogin = useCallback((email, password) => {
    dispatch(AuthActions.login({ email, password }))
  }, [dispatch]);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    dispatch(AuthActions.changeInput({name, value }))
  };

  if(isLoading) {
    return (
      <Spin>
        <Spinner />
      </Spin>
    )
  }

  return(
    <>
      <Error>{error || ''}</Error>
      {token ? window.location.reload() : null}
      <Wrapper>
      <Title>Login</Title>
      <Input 
        name="email"
        type="email" 
        placeholder="Email"
        value={email} 
        onChange={e => handleChangeInput(e)}
       />
      <Input
        name="password" 
        type="password" 
        placeholder="Password"
        value={password} 
        onChange={e => handleChangeInput(e)}
       />
      <Button onClick={() => handlerSubmitLogin(email, password)}>Submit</Button>
      <WrapLink>
        <Link to="/register">Signup</Link>
        <Link to="/reset-password">ResetPassword</Link>
      </WrapLink>
      </Wrapper>
    </>
  )
}

export default Login;