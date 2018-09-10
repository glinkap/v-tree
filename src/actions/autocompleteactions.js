export const search = () => ({type: 'SEARCH'});

export const showContent = (e) => dispatch => {
	console.log("e", e);
	console.log("this.link", this.link);
	fetch('https://v-tree.ru' + "/api/detail?id=7")
	.then(response => response.json())
	.then(responseData => {
		// console.log("responseData", responseData);
		dispatch({	type:'SHOW_CONTENT', 
					payload:{
						isVisible:true,
						data:responseData.content
					}
				});

	})
	.catch(error => {
			console.log('Error fetching and parsing data', error);
	}) 
		
}

