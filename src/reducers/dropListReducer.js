const initialState = {
	isVisible:false,
	data:[],	
}

export default function dropListReducer (state = initialState, action) {
	switch(action.type) {
		case 'DROP_LIST' : {
			return {
				...state, data: action.payload.list
			}
		}
		default: return state
	}

}