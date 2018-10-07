import { call, put, takeLatest } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
import * as Api from '../api/v-tree-api';

function* onChangeInput(action) {
	if (action.payload === '') {
		yield put({type:'DROP_LIST_INITIAL_STATE'});
		yield put({type:'CONTENT_INITIAL_STATE'});
		yield put({type:'PRODUCT_INITIAL_STATE'});
	} else {
	   	try {
	   		// yield delay(300);
	   		yield put({type:'PRELOADER_START'});
	   		const request = yield call(Api.getVariants, action.payload);
	   		yield put({type:'PRELOADER_FINISH'});
	   		yield put({type:'DROP_LIST', payload: request });
	   } catch (e) {
	   }
	}
}


export default function* () {
  yield takeLatest("ON_CHANGE", onChangeInput);
}