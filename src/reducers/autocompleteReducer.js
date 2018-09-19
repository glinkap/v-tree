const initialState = {
	searchProcess:false,
	inputedValue:'',
	content:''

}
export function autocompleteReducer(state = initialState, action) {
	switch(action.type) {		
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