import React, { Component } from 'react';
// import ListComp from './listComp';
import { connect } from 'react-redux';
import { DropdownList, Hok } from './dropdownList';
import './autocomplete.css';

class Autocomplete extends Component {
	render() {
		return (
			<div className="autocomplete">
				<input	placeholder="Введите проблему" 
						className="autocomplete-input" 
						/*ref={this.handleInput}*/
						onChange={this.props.searchVariants.bind(this)} />
				<DropdownList inputedValue = {this.props.inputedValue} />	
			</div>

		)
	}
};
const mapDispatchToProps = dispatch => ({
	searchVariants: (e) => {
		const getVariants = () => {
			return (dispatch) => {
				const inputedValue = e.target.value;
				// this.props.inputedValue = inputedValue;
				dispatch({
					type: 'ON_CHANGE',
					payload: inputedValue
				});
				dispatch({type:'DROP_LIST_CLEAR'});
				if (inputedValue.length > 2) {
					fetch('https://v-tree.ru/api/autocomplete?w='+inputedValue)
					.then(response => response.json())
					.then(responseData => {
						console.log("responseData", responseData);
						dispatch({type:'DROP_LIST', payload:responseData});

					})
					.catch(error => {
       					console.log('Error fetching and parsing data', error);
      				} 
				)}
			}			
		}
		dispatch(getVariants())
	},
	onChangeInput: (e) => {
		const inputedValue = e.target.value;
		if (inputedValue !=='') {
			dispatch({
				type: 'ON_CHANGE',
				payload: inputedValue
			})
			
		}
	},
});
const mapStateToProps = (state) => {
	return { handleInput: this.handleInput}
}
export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);
