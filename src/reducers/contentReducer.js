const initialState = {
	isVisible:false,
	data:'',
	loading:false

}
export function contentReducer(state = initialState, action) {
	switch(action.type) {		
		case 'SHOW_CONTENT': {
			return {
				...state, ...action.payload
			} 
		} 
		case 'CONTENT_PRELOADER_START': {
			return {
				...state, loading:true
			} 
		}
		case 'CONTENT_PRELOADER_END': {
			return {
				...state, loading:false
			} 
		}  
		case 'HIDE_CONTENT': {
			return {
				...state, isVisible: action.payload.isVisible
			} 
		}
		case 'CONTENT_INITIAL_STATE' : {
						return {
				...state, ...initialState 
			}
		}  		
		default: return state;
	}

}