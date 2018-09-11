const initialState = {
	data:[],
	isVisible:false	
}

export default function dropListReducer (state = initialState, action) {
	switch(action.type) {
		case 'DROP_LIST' : {
			
			return {
				...state, data: action.payload.list, isVisible: action.payload.list.length ? false : true
			}
		} 
		/*case 'DROP_LIST_CLEAR' : {
			return {
				...state, isVisible:true
			}
		}*/ 
		default: return state
	}

}