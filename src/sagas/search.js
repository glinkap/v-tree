import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as Api from '../api/v-tree-api';

function* onChangeInput(action) {
   try {
   	 // yield delay(300);
      const list = yield call(Api.getUser, action.payload);
      yield put({type:'DROP_LIST', payload:list});
   } catch (e) {
   }
}


export default function* mySaga() {
  yield takeLatest("ON_CHANGE", onChangeInput);
}