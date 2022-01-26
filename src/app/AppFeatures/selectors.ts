import { createSelector } from '@reduxjs/toolkit';

import { AppFeaturesState } from './types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: AppFeaturesState) => state || initialState;

export const selectUserData = createSelector(
  [selectDomain],
  AppFeaturesState => AppFeaturesState.userData,
);
