import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.appFeatures || initialState;

export const selectIsAuthData = createSelector(
  [selectDomain],
  AppFeaturesState => AppFeaturesState.isAuth,
);

export const selectAuthGroup = createSelector(
  [selectDomain],
  AppFeaturesState => AppFeaturesState.authGroup,
);
