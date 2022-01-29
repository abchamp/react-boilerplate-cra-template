import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import { useForm, Controller } from 'react-hook-form';
import { Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useAppFeaturesSlice } from 'app/appFeatures';
import { selectIsAuth } from 'app/appFeatures/selectors';
import { Typography, Space } from 'antd';

export function LoginPage() {
  const dispatch = useDispatch();
  const { actions } = useAppFeaturesSlice();
  const isAuth = useSelector(selectIsAuth);
  //
  const { Text, Link } = Typography;

  useEffect(() => {
    if (isAuth !== false) {
      console.log('redirect to dashboard', isAuth);
    }
  }, [isAuth]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = formData => {
    dispatch(actions.loadUserData(formData));
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="" />
      </Helmet>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => <Input placeholder="userame" {...field} />}
        />

        {errors.username && <Text type="danger">Username is required.</Text>}

        <Controller
          name="password"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Input.Password placeholder="password" {...field} />
          )}
        />

        {errors.password && <Text type="danger">Password is required.</Text>}

        <input type="submit" />
      </form>
    </>
  );
}
