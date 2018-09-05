import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ButtonTag from './buttonTag';

class DropdownListComp extends Component {
	render() {
			console.log("this.props", this.props);
		if (this.props.dropListReducer.clear) {
			return  this.props.inputedValue =='' ? null : <p className='small'>Ничего не найдено</p>
		} else {
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
}
export const DropdownList = connect(state => ({dropListReducer:state.dropListReducer,
												inputedValue:state.autocompleteReducer.inputedValue}), dispatch =>({}))(DropdownListComp);




export const Hok = function list(Tag) {
	return class extends Component {
		constructor() {
			super()
			this.onclick = this.onClick.bind(this)
		}
		onClick(e) {
			console.log(this,e)
			// e.preventDefault();
		}
		render() {
			return <div>
						<Tag {...this.props} onClick={this.onClick} />
					</div>	
		}
	}
}