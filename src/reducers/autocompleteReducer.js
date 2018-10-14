const initialState = {
	searchProcess:false,
	inputedValue:'',
	content:'',
	loading: false

}
export function autocompleteReducer(state = initialState, action) {
	switch(action.type) {		
		case 'SEARCH_PRELOADER_START': {
			return {
				...state, loading:true
			} 
		}
		case 'SEARCH_PRELOADER_END': {
			return {
				...state, loading: false
			} 
		}
		case 'ON_CHANGE': {
			return {
				...state, inputedValue: action.payload,
			} 
		} 
		case 'CLEAR_INPUT': {
			return {
				...state, inputedValue: '',
			} 
		} 		
		default: return state;
	}

}