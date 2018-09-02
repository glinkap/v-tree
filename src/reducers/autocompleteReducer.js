const initialState = {
	focus: false,
	searchProcess:false,
	inputedValue:''

}
export function autocompleteReducer(state = initialState, action) {
	switch(action.type) {		
		case 'ON_CHANGE': {
			return {
				...state, inputedValue: action.payload
			}
		}
		case 'FOCUS': {
			return {
				...state,focus:true
			}
		}
		case 'SEARCH': {
			return {
				...state,focus:true
			}
		}		
		default: return initialState;
	}

}