/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { UsersPage } from './pages/UsersPage';
import { LoginPage } from './pages/LoginPage';
//
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
//
import { useSelector, useDispatch } from 'react-redux';
import { useAppFeaturesSlice } from './appFeatures';
import { selectIsAuthData } from './appFeatures/selectors';
import AuthContextProvider from './hook/authContext';

export function App() {
  const { i18n } = useTranslation();
  const { actions } = useAppFeaturesSlice();

  const userData = useSelector(selectIsAuthData);

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(effect, []);
  };

  // useEffectOnMount(() => {
  //   // When initial state username is not null, submit the form to load repos
  //   console.log('MAIN APP index calling');
  //   console.log(userData);
  // });

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/signin'}
          component={LoginPage}
        />
        
        <AuthContextProvider>
          <Route
            exact
            path={process.env.PUBLIC_URL + '/users'}
            component={UsersPage}
          />
        </AuthContextProvider>

        <Route component={NotFoundPage} />
      </Switch>

      <GlobalStyle />
    </BrowserRouter>
  );
}
