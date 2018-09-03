import React, { Component } from 'react';
import { connect } from 'react-redux';

class DropdownList extends Component {
	render() {
		return (
				<div>
					<ul>
						{this.props.dropListReducer.data.map((item, index) => {
							return <li key={index} >{item}</li>
						})}
					</ul>	
					
				</div>
			)
	}
}
export default connect(state => ({dropListReducer:state.dropListReducer}), dispatch =>({}))(DropdownList)