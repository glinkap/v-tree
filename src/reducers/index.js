import { combineReducers } from 'redux'
// import {histogram} from './histogram'
import {autocompleteReducer} from './autocompleteReducer';
import dropListReducer from './dropListReducer';

export default combineReducers({
	autocompleteReducer,
	dropListReducer
})
