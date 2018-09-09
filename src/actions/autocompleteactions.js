export const search = () => ({type: 'SEARCH'})
export const showContent = (z1,dispatch) => {
	console.log("z1", z1);
	console.log("dispatch", dispatch);
	// showzz:dispatch(getContent(dispatch, this.link))	
	
}


const getContent = (dispatch)=> {
	fetch('https://v-tree.ru' + this.link)
	.then(response => response.json())
	.then(responseData => {
		// console.log("responseData", responseData);
		dispatch({	type:'SHOW_CONTENT', 
					payload:{
						isVisible:true,
						data:responseData
					}
				});

	})
	.catch(error => {
			console.log('Error fetching and parsing data', error);
	}) 
}