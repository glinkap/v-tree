import { combineReducers } from 'redux'
// import {histogram} from './histogram'
import {autocompleteReducer} from './autocompleteReducer';
import listReducer from './listReducer';

export default combineReducers({
	autocompleteReducer,
	listReducer
})
