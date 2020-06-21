import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Wrapper, Title, Success, Error, Spin } from './styled';
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import Spinner from '../../../components/UI/Spinner';

import AuthActions from '../../../store/auth/actions';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { email, success, error, isLoading } = useSelector((state) => state.auth);

  const handlerSubmitLogin = useCallback((email) => {
    dispatch(AuthActions.resetPassword({ email }))
  }, [dispatch]);
    
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

  return(
    <>
      <Success>{success || ''}</Success>
      <Error>{error || ''}</Error>
      <Wrapper>
        <Title>Reset Password</Title>
        <Input
          name="email"
          type="email" 
          value={email} 
          placeholder="Email"
          onChange={e => handleChangeInput(e)}
        />
        <Button onClick={() => handlerSubmitLogin(email)}>Send email</Button>
        <Link to="/">Login</Link>
      </Wrapper>
    </>
  )
}

export default ResetPassword;