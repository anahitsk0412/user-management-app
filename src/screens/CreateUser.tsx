import { FormControl, TextField, Button, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { createUser, userSelector } from '../features/userSlice';
import { useAppDispatch, useAppSelector } from '../utils/Reduxhooks';

const validationSchema = yup.object({
  username: yup
    .string()
    .min(2, 'Username should be of minimum 2 characters length')
    .max(32, 'Username should be of maximum 32 characters length')
    .required('Username is required'),
  phoneNumber: yup
    .string()
    .test('len", "Invalid Phone Number', (val = '') => {
      const val_length_without_dashes = val.replace(/-|_/g, '').length;
      return val_length_without_dashes >= 2 && val_length_without_dashes <= 8;
    })
    .min(2, 'Phone number should be of minimum 2 characters length')
    .max(10, 'Phone number should be of maximum 10 characters length')
    .required('Phone number is required'),
  password: yup
    .string()
    .min(6, 'Password should be of minimum 6 characters length')
    .max(12, 'Password should be of maximum 32 characters length')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords dos not match!')
    .required('Confirm Password is required'),
});

export const CreateUserScreen: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | undefined>(undefined);

  const createdUser = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(createUser(values));
      if (!createdUser.loading && !createdUser.error) {
        resetForm();
        navigate('/user');
      }
    },
  });

  return (
    <FormControl>
      <Typography color={'error'}>{error}</Typography>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <TextField
          required
          fullWidth
          id="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant="outlined"
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />

        <InputMask
          mask="999-99-999"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <TextField
            required
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            variant="outlined"
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </InputMask>
        <TextField
          required
          fullWidth
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          required
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />
        <Button variant="contained" sx={{ mt: 1 }} type="submit" disabled={!formik.isValid}>
          Submit
        </Button>
      </form>
    </FormControl>
  );
};
