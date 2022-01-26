// import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { AppFeaturesState } from './types';
import { AppFeaturesSaga } from './saga';

export const initialState: AppFeaturesState = {
  mainLoading: false,
  userData: {}
};

const slice = createSlice({
  name: 'appFeatures',
  initialState,
  reducers: {
    // for change state
    loadUserData(state) {
      state.mainLoading = true;
      state.userData = {}
    },
    userDataLoaded(state, action) {
      state.mainLoading = false;
      state.userData = action.payload
    }
  },
});

export const { actions: AppFeaturesAction, reducer } = slice;

export const useAppFeaturesSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: AppFeaturesSaga });
  return { actions: slice.actions };
};
