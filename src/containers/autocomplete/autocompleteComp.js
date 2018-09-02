import React, { Component } from 'react';
// import ListComp from './listComp';
import { connect } from 'react-redux';
class Autocomplete extends Component {
	render() {
		return (
			<div className="autocomplete">
				<input	placeholder="Введите проблему" 
						className="autocomplete-input" 
						onChange={this.props.searchVariants.bind(this)} />
				{/*<ListComp className="autocomplete-ul" />*/}
			</div>

		)
	}
}
const mapDispatchToProps = dispatch => ({
	searchVariants: (e) => {
		const getVariants = () => {
			return (dispatch) => {
				const inputedValue = e.target.value;
				dispatch({
					type: 'ON_CHANGE',
					payload: inputedValue
				});
				if (inputedValue.length > 2) {
					fetch('https://v-tree.ru/api/autocomplete/?w='+inputedValue)
					.then(response => response.json())
					.then(responseData => {
						console.log("responseData", responseData);

					})
					.catch(error => {
       					console.log('Error fetching and parsing data', error);
      				} 
				)}

			}			
		}
		dispatch(getVariants())
	},
	getVariants:() =>  {
		const fetchVariants = () => {
			return dispatch => {
				setTimeout(()=> {
					console.log(this);
					dispatch({type: 'FETCH', paload: []})
				},2000)
			}
		}
		dispatch(fetchVariants());
	},
	onChangeInput: (e) => {
		const inputedValue = e.target.value;
		dispatch({
			type: 'ON_CHANGE',
			payload: inputedValue
		})
	},
});

export default connect(() => ({}), mapDispatchToProps)(Autocomplete);
