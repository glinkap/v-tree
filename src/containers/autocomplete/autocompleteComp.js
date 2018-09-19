import React, { Component } from 'react';
// import ListComp from './listComp';
import { connect } from 'react-redux';
import { DropdownList } from './dropdownList';
import './autocomplete.css';
import Content from './content';
import InputCross from '../../components/inputCross';

class Autocomplete extends Component {
	clear() {
		this.input.value = '';
		this.props.clearInput();
		this.input.focus();

	}
	render() {
		return (
			<div className="autocomplete">
				<div className="inputWrapper">
					<input	placeholder="Введите проблему" 
							className="autocomplete-input" 
							ref={el => this.input = el}
							onChange={this.props.searchVariants.bind(this)} />
					<InputCross onClick={this.clear.bind(this)} />
				</div>	
				<DropdownList inputedValue = {this.props.inputedValue} />
				<Content />	
			</div>

		)
	}
};
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
					dispatch({type:'HIDE_CONTENT', payload:{isVisible:false}});
					fetch('https://v-tree.ru/api/autocomplete?w='+inputedValue)
					.then(response => response.json())
					.then(responseData => {
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
	clearInput: () => dispatch({type:'CLEAR_INPUT'})
});
const mapStateToProps = (state) => {
	return { handleInput: this.handleInput}
}
export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);
