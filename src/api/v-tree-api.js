const searchUrl = 'https://v-tree.ru/api/autocomplete?w=';
export const getUser = (inputedValue) => {
	// if (inputedValue.length > 2) {
		return fetch(`${searchUrl}${inputedValue}`)
		.then(response => response.json())
		// .then(responseData => {
		// 	dispatch({type:'DROP_LIST', payload:responseData});
		// })
		// .catch(error => {
		// 		console.log('Error fetching and parsing data', error);
		// 	} 
	// )}
	return 'getUser';
}