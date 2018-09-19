const initialState = {
	selected: false
}

export default function dropListReducer (state = initialState, action) {
	switch(action.type) {
		// case 'TAG_SELECTED' : {
			
		// 	return {
		// 		...state, selected:true /*selected:action.payload.item*/
		// 	}
		// } 
		default: return state
	}

}