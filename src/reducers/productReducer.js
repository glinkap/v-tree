const initialState = {
	isVisible:false,
	selected:null	
}

export default function dropListReducer (state = initialState, action) {
	switch(action.type) {
		case 'SHOW_PRODUCT' : {
						return {
				...state, isVisible:true, selectedIndex:action.payload.selectedIndex, 
			}
		} 
		default: return state
	}

}