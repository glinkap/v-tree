import { combineReducers } from 'redux'
// import {histogram} from './histogram'
import {autocompleteReducer} from './autocompleteReducer';
import dropListReducer from './dropListReducer';
import {contentReducer} from './contentReducer';

export default combineReducers({
	autocompleteReducer,
	dropListReducer,
	contentReducer
})
