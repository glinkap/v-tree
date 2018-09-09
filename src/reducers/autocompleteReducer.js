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
		default: return state;
	}

}