import React from 'react';

export default function VitaminTreeFetch(Component, apiUrl) {
	return class extends React.Component {
		get = () => {
			fetch('https://v-tree.ru'+apiUrl)
			.then(response => response.json())
			.then(responseData => {
				console.log("responseData", responseData);

			})
			.catch(error => {
					console.log('Error fetching and parsing data', error);
			})
			
		}
		render() {
			return <Component  {...this.props} />
		}
	}
}





