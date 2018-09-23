const initialState = {
	data:[],
	isVisible:false,
	selected:null	
}

export default function dropListReducer (state = initialState, action) {
	switch(action.type) {
		case 'DROP_LIST' : {
			const data = action.payload.list.map((item,index) => {
				return {...item, index:index}
			});
			return {
				...state, data, isVisible: action.payload.list.length ? true : false
			}
		} 
		case 'TAG_SELECTED' : {
			return {
				...state, selected: action.payload.index
			}
		}
		case 'HIDE_DROP_LIST' : {
			return {
				...state, isVisible:false
			}
		}
		default: return state
	}

}