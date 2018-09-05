const initialState = {
	data:[],
	clear:false	
}

export default function dropListReducer (state = initialState, action) {
	switch(action.type) {
		case 'DROP_LIST' : {
			
			return {
				...state, data: action.payload.list, clear: action.payload.list.length ? false : true
			}
		} 
		case 'DROP_LIST_CLEAR' : {
			return {
				...state, clear:true
			}
		} 
		default: return state
	}

}