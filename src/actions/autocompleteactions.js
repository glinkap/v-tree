export const search = () => ({type: 'SEARCH'});

export const showContent = (link) => dispatch => {
	fetch('https://v-tree.ru' + link)
	.then(response => response.json())
	.then(responseData => {
		// console.log("responseData", responseData);
		dispatch({	type:'SHOW_CONTENT', 
					payload:{
						isVisible:true,
						data:responseData.content + link
					}
				});

	})
	.catch(error => {
			console.log('Error fetching and parsing data', error);
	}) 
		
}

