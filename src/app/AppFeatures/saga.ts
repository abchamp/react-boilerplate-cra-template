import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { AppFeaturesAction as actions } from '.';
import { authJsonRequest } from "utils/request";
import { setLocalSetting, SettingKey } from "utils/localStorage";

export function* mainAuthSaga(data) {
  // use for sign in
  const requestURL = "/auth/login"
  try {
    const responseData = yield(call(authJsonRequest, requestURL, 'POST', data.payload))
    yield call(setLocalSetting, SettingKey.AccessToken, responseData.data?.access_token || null); // set
    yield put(actions.userDataLoaded({gp: responseData.data?.gp}));
  } catch(err: any) {
    yield put(actions.loadedError());
  }
}

// reject

export function* AppFeaturesSaga() {
  yield takeLatest(actions.loadUserData.type, mainAuthSaga)
  // console.log("saga", );
  //
}
