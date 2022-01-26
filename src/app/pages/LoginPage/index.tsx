import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import { useForm, Controller } from 'react-hook-form';
import { Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {useAppFeaturesSlice } from 'app/AppFeatures';
import { selectUserData } from 'app/AppFeatures/selectors';

export function LoginPage() {
  const dispatch = useDispatch();
  const { actions } = useAppFeaturesSlice();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = data => {
    dispatch(actions.loadUserData());
  }
 
 

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="" />
      </Helmet>
      <PageWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => <Input placeholder="userame" {...field} />}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => <Input.Password placeholder="password"  {...field} />}
          />

          <input type="submit" />
        </form>
      </PageWrapper>
    </>
  );
}
