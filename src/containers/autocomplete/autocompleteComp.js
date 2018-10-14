import React, { Component } from 'react';
// import ListComp from './listComp';
import { connect } from 'react-redux';
import { DropdownList } from './dropdownList';
import './autocomplete.css';
import Content from './content';
import InputCross from '../../components/inputCross';
import Prelooader from '../../components/preloadersvg';

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
					<Prelooader loading={this.props.loading} />
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
		const inputedValue = e.target.value;
		dispatch({
			type: 'ON_CHANGE',
			payload: inputedValue
		});
	},
	onChangeInput: (e) => {
		const inputedValue = e.target.value;
		if (inputedValue !=='') {
			dispatch({
				type: 'ON_CHANGE',
				payload: inputedValue
			});
			
		}
	},
	clearInput: () => {
		dispatch({type:'CLEAR_INPUT'});
		dispatch({type:'DROP_LIST_INITIAL_STATE'});
		dispatch({type:'CONTENT_INITIAL_STATE'});
		dispatch({type:'PRODUCT_INITIAL_STATE'})

	}
});
const mapStateToProps = (state) => {
	return { handleInput: this.handleInput,
				loading: state.autocompleteReducer.loading}
}
export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);
			