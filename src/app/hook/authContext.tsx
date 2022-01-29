import React, { createContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppFeaturesAction as actions } from 'app/appFeatures';
import { selectIsAuth, selectAuthGroup } from 'app/appFeatures/selectors';
import { Layout, Menu } from 'antd';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { getLocalSetting, SettingKey } from 'utils/localStorage';
import { useHistory } from 'react-router-dom';
import { authJsonRequest } from 'utils/request';
import AppNavBar from 'app/components/AppNavBar';

// const AuthContext = createContext({});

const AuthContextProvider = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const [isChecking, setIsChecking] = useState(false);
  const isAuth = useSelector(selectIsAuth);
  const authGroup = useSelector(selectAuthGroup)

  const { Header, Content, Sider } = Layout;

  const getVerify = async () => {
    // check group
    try {
      if(authGroup === '') {
        const verifyData: any = await authJsonRequest('/users/verify', 'GET');
        dispatch(actions.userDataLoaded({ gp: verifyData.data.gp }));
      } else {
        dispatch(actions.userDataLoaded({}));
      }
    } catch (error) {
      dispatch(actions.setLoggout());
      history.push('/');
    }
  };

  useEffect(() => {
    if (!isAuth) {
      let token = getLocalSetting(SettingKey.AccessToken);
      if (token === null) {
        dispatch(actions.setLoggout());
        history.push('/');
      } else {
        getVerify();
      }
    }
  }, []);
  // check token

  return (
    // <AuthContext.Provider value={{}}>
    <Layout>
      <AppNavBar/>
      <Content style={{ margin: '24px 16px 0' }}>
        {isAuth ? props.children : <LoadingIndicator />}
      </Content>
    </Layout>
    // </AuthContext.Provider>
  );
};

export default AuthContextProvider;
