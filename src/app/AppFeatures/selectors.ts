import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.appFeatures || initialState;

export const selectIsAuth = createSelector(
  [selectDomain],
  AppFeaturesState => AppFeaturesState.isAuth,
);

export const selectAuthGroup = createSelector(
  [selectDomain],
  AppFeaturesState => AppFeaturesState.authGroup,
);

export const selectedIsMobileMenu = createSelector(
  [selectDomain],
  AppFeaturesState => AppFeaturesState.isMobileMenu,
);

export const selectedMobileMenuOpen = createSelector(
  [selectDomain],
  AppFeaturesState => AppFeaturesState.mobileMenuOpen,
);

export const selectDrawerTab = createSelector(
  [selectDomain],
  AppFeaturesState => AppFeaturesState.drawerTab
)