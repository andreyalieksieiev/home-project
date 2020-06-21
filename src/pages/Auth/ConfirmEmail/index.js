import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Wrapper, Success, Error, Spin } from './styled';
import AuthActions from '../../../store/auth/actions';
import Spinner from '../../../components/UI/Spinner';

const ConfirmEmail = ({ history }) => {
  const dispatch = useDispatch();
  const {success, error, isLoading } = useSelector((state) => state.auth)

  useEffect(() => {
    let token = new URLSearchParams(history.location.search).get('token');
    dispatch(AuthActions.confirmEmail({ confirmEmailToken: token }));
    setTimeout(() => {
      history.push('/')
    }, 1000)
  },[dispatch, history]);

  if(isLoading) {
    return (
      <Spin>
        <Spinner />
      </Spin>
    )
  }
  
  return (
    <Wrapper>
      <Error>{error}</Error>
      <Success>{success}</Success>
    </Wrapper>
  )
}

export default withRouter(ConfirmEmail);