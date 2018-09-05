const initialState = {
	focus: false,
	searchProcess:false,
	inputedValue:''

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