import { all, fork } from 'redux-saga/effects';
import search from './search';
import tagSelected from './tagSelected';

export default function * rootSaga() {
     yield all([
        fork(search),
        fork(tagSelected),
        
    ]);
};