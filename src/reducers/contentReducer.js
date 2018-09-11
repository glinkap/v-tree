const initialState = {
	isVisible:false,
	data:''

}
export function contentReducer(state = initialState, action) {
	switch(action.type) {		
		case 'SHOW_CONTENT': {
			return {
				...state, isVisible: action.payload.isVisible, data: action.payload.data
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