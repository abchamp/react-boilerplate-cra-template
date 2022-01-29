// import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { AppFeaturesState } from './types';
import { AppFeaturesSaga } from './saga';

export const initialState: AppFeaturesState = {
  mainLoading: false,
  mobileMenuOpen: false,
  drawerTab: 0,
  isMobileMenu: false,
  isAuth: false,
  authGroup: '',
  error: false,
};

const slice = createSlice({
  name: 'appFeatures',
  initialState,
  reducers: {
    // for change state
    loadUserData(state, action) {
      state.mainLoading = true;
      state.error = false;
      state.isAuth = false;
    },
    userDataLoaded(state, action) {
      state.mainLoading = false;
      state.error = false;
      state.isAuth = true;
      state.authGroup = action.payload.gp;
    },
    setLoggout(state) {
      state.isAuth = false;
      state.authGroup = '';
    },
    loadedError(state) {
      state.mainLoading = false;
      state.error = true;
      state.isAuth = false;
    },
    setIsMobileMenu(state, action) {
      state.isMobileMenu = action.payload <= 767;
    },
    toggleMobileMenuOpen(state) {
      if(state.isMobileMenu) {
        if (!state.mobileMenuOpen) {
          state.mobileMenuOpen = true;
        } else {
          state.mobileMenuOpen = false;
        }
      } else {
        state.mobileMenuOpen = false
      }
    },
  },
});

export const { actions: AppFeaturesAction, reducer } = slice;

export const useAppFeaturesSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: AppFeaturesSaga });
  return { actions: slice.actions };
};
