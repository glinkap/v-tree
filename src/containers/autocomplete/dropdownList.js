import React, { Component } from 'react';
import { connect } from 'react-redux';

class DropdownList extends Component {
	render() {
		return (
				<div className="autocomplete-ul">
					<ul>
						{this.props.dropListReducer.data.map((item, index) => {
							return <li key={index} >{item.text}<p className='small'>{item.link}</p></li>
						})}
					</ul>	
					
				</div>
			)
	}
}
export default connect(state => ({dropListReducer:state.dropListReducer}), dispatch =>({}))(DropdownList)