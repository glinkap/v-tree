import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ButtonTag from './buttonTag';

class DropdownList extends Component {
	
		test = (e) => {
			console.log(this)
			e.preventDefault();
		}
	
	render() {
		function ButtonTag(props) {
			return <div className='listItem'>{props.text}</div>
		}
		const listItems = this.props.dropListReducer.data.map((item, index) => {
			return <ButtonTag 	onClick={this.test}
					 			key={index.toString()} 
					 			text={item.text} 
					 			link={item.link} />
		})
		return <ul className="autocomplete-ul">
					{listItems}
				</ul>
			
	}
}
export default connect(state => ({dropListReducer:state.dropListReducer}), dispatch =>({}))(DropdownList)