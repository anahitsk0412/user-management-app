import { Grid } from '@mui/material';
import React, { useEffect } from 'react';

import { UserCard } from '../components/UserCard';
import { getUser, userSelector } from '../features/userSlice';
import { User } from '../models/User';
import { useAppDispatch, useAppSelector } from '../utils/Reduxhooks';

export const CurrentUserScreen = () => {
  const userData = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(userSelector);

  useEffect(() => {
    dispatch(getUser(Number(userData.currentId)));
  }, [userData.currentId]);

  // @ts-ignore
  return (
    <Grid container spacing={2} mt={4} justifyContent={'space-between'}>
      <UserCard content={user} />
    </Grid>
  );
};
