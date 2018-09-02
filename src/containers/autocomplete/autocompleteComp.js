import React, { Component } from 'react';
import listComp from './listComp';
import { connect } from 'react-redux';
class Autocomplete extends Component {
	render() {
		console.log(this);
		return (
			<div className="autocomplete">
				<input placeholder="Введите проблему" className="autocomplete-input" onChange={()=>null} />				
				<listComp className="autocomplete-ul" />
			</div>

		)
	}
}
const mapDispatchToProps = dispatch => ({
  search: () => dispatch({
    type: 'SEARCH',
    payload:''
  }) 
});

export default connect(() => ({}), mapDispatchToProps)(Autocomplete);
