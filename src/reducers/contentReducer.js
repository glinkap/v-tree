const initialState = {
	isVisible:false,
	data:''

}
export function contentReducer(state = initialState, action) {
	switch(action.type) {		
		case 'SHOW_CONTENT': {
			return {
				...state, ...action.payload
			} 
		} 
		case 'HIDE_CONTENT': {
			return {
				...state, isVisible: action.payload.isVisible
			} 
		} 		
		default: return state;
	}

}