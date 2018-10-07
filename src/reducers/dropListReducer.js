const initialState = {
	data:[],
	isVisible:false,
	selected:null,
	prevSelected:null	
}

export default function dropListReducer (state = initialState, action) {
	switch(action.type) {
		case 'DROP_LIST' : {
			if (action.payload.status === 'ok') {				
				const data = action.payload.list.map((item,index) => {
					return {...item, index:index}
				});
				return {
					...state, data, isVisible: action.payload.list.length ? true : false
				}
			} else {
				return state;
			}
		} 
		case 'TAG_SELECTED' : {
			return {
				...state, selected: action.payload.index,
							prevSelected:action.payload.index/*state.selected*/
			}
		}
		case 'HIDE_DROP_LIST' : {
			return {
				...state, isVisible:false
			}
		}
		case 'DROP_LIST_INITIAL_STATE' : {
			return {
				...state, ...initialState
			}
		}
		default: return state
	}

}