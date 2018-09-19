const initialState = {
	selected: false
}

export default function dropListReducer (state = initialState, action) {
	switch(action.type) {
		case 'TAG_SELECTED' : {
			
			return {
				...state, selected:true
			}
		} 
		default: return state
	}

}