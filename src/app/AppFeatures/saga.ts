import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { selectUserData } from './selectors';
import { AppFeaturesAction as actions } from '.';


export function* getAppFeature() {

}

export function* AppFeaturesSaga() {
  // yield takeLatest(actions.loadRepos.type, getRepos);
}
