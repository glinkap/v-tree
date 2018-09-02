const initialState = {
	isOpened: false,
	searchProcess:false,
	dataFlow:false,
	hover:false

}
export default function listReducer(state = initialState, action) {
	switch(action.type) {		
		case 'OPEN': {
			return {
				...state, isOpened:true
			}
		}
		case 'CLOSE': {
			return {
				...state,isOpened:false
			}
		}
		case 'HOVER': {
			return {
				...state,hover:true
			}
		}		
		default: return initialState;
	}

}