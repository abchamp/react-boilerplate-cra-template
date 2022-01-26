import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { selectUserData } from './selectors';
import { AppFeaturesAction as actions } from '.';

export function* getAppFeature() {
  // call database
  yield put(actions.userDataLoaded({ token: 'hello champ' }));
}

export function* AppFeaturesSaga() {
  yield takeLatest(actions.loadUserData.type, getAppFeature);
}
