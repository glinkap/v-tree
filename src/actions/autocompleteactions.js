export const search = () => ({type: 'SEARCH'});

export const showContent = ({link,drop}) => dispatch => {
	fetch('https://v-tree.ru' + link)
	.then(response => response.json())
	.then(responseData => {
		dispatch({	type:'SHOW_CONTENT', 
					payload:{
						isVisible:true,
						data:'это контент -' + responseData.content + ' ' + link 
					}
				});

	})
	.catch(error => {
			console.log('Error fetching and parsing data', error);
	}) 
		
}

