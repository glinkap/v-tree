const initialState = {
	data:[],
	isVisible:false,
	selected:null	
}

export default function dropListReducer (state = initialState, action) {
	switch(action.type) {
		case 'DROP_LIST' : {
				console.log("data", action.payload.list);
			const data = action.payload.list.map((item,index) => {
				return {...item, index:index}
			});
			return {
				...state, data: data, isVisible: action.payload.list.length ? false : true
			}
		} 
		case 'TAG_SELECTED' : {
			return {
				...state, selected: action.payload.index
			}
		}
		default: return state
	}

}