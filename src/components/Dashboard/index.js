import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import UserActions from '../../store/user/actions';

const Dashboard = () => {

  const dispatch = useDispatch();
  // const { error } = useSelector((state) => state.user);
  // console.log('error: ', error);
  
  useEffect(() => {
    dispatch(UserActions.getUser())
  },[dispatch]);

  return (
    <h1>Dashboard</h1>
  );
};

export default Dashboard;