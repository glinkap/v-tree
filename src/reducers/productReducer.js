const initialState = {
	isVisible:false,
	selectedIndex:NaN
}

export default function dropListReducer (state = initialState, action) {
	switch(action.type) {
		case 'SHOW_PRODUCT' : {
						return {
				...state, isVisible:true, selectedIndex:action.payload.selectedIndex, 
			}
		} 
		case 'PRODUCT_INITIAL_STATE' : {
						return {
				...state, ...initialState 
			}
		} 
		default: return state
	}

}