import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { Wrapper, Title, Success, Error, Spin } from './styled';
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import Spinner from '../../../components/UI/Spinner';

import AuthActions from '../../../store/auth/actions';

const NewPassword = ({ history }) => {
  const [errorMessage, setErrorMessage] = useState();

  const token = new URLSearchParams(history.location.search).get('token');
  
  const dispatch = useDispatch();
  const {  firstEmail, secondEmail, success, error, isLoading } = useSelector((state) => state.auth)

  const handlerSubmitLogin = useCallback((firstEmail, secondEmail, token, error) => {
    if(firstEmail === secondEmail) {
      dispatch(AuthActions.newPassword({resetPasswordToken: token, newPassword: firstEmail}))
    } else {
      setErrorMessage('Please enter a valid password')
    }
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
      <Error>{error || errorMessage }</Error>
      <Wrapper>
        <Title>New Password</Title>
        <Input
          name="firstEmail"
          type="password" 
          value={firstEmail} 
          placeholder="Password"
          onChange={e => handleChangeInput(e)}
        />
         <Input
          name="secondEmail"
          type="password" 
          value={secondEmail} 
          placeholder="Password"
          onChange={e => handleChangeInput(e)}
        />
        <Button onClick={() => handlerSubmitLogin(firstEmail, secondEmail, token, error)}>New Password</Button>
        <Link to="/">Login</Link>
      </Wrapper>
    </>
  )
}

export default withRouter(NewPassword);