import React, { Component } from 'react';
import ListComp from './listComp';
import { connect } from 'react-redux';
class Autocomplete extends Component {
	render() {
		 
		return (
			<div className="autocomplete">
				<input	placeholder="Введите проблему" 
						className="autocomplete-input" 
						ref={input => {this.input = input}} 
						onChange={this.props.onChangeInput.bind(this)} />				
				{/*<ListComp className="autocomplete-ul" />*/}
			</div>

		)
	}
}
const mapDispatchToProps = dispatch => ({
	search: () => dispatch({
		type: 'SEARCH',
		payload:''
	}), 
	onChangeInput: (e) => dispatch({
		type: 'ON_CHANGE',
		payloads: e.target.value
	})
});

export default connect(() => ({}), mapDispatchToProps)(Autocomplete);
