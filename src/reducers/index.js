import { combineReducers } from 'redux'
// import {histogram} from './histogram'
import {autocompleteReducer} from './autocompleteReducer';
import dropListReducer from './dropListReducer';
import {contentReducer} from './contentReducer';
import buttonTagReducer from './buttonTagReducer';
import productReducer from './productReducer';

export default combineReducers({
	autocompleteReducer,
	dropListReducer,
	contentReducer,
	buttonTagReducer,
	productReducer
})
