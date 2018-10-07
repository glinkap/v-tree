import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
import * as Api from '../api/v-tree-api';

function* dataOnSelected(action) {
   try {
   		const request = yield call(Api.getContent, action.payload);
	    yield put({type:'CONTENT_INITIAL_STATE'});
	    yield put({type:'PRODUCT_INITIAL_STATE'});
	    yield put({type:'SHOW_CONTENT', payload:{	isVisible:true,
													content:request.content,
													vitamins: request.vitamins} });
   } catch (e) {
   }
}


export default function* () {
  yield takeLatest("TAG_SELECTED", dataOnSelected);
}