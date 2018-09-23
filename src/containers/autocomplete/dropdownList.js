import React, { Component } from 'react';
import { connect } from 'react-redux';
import ButtonTag from './buttonTag';

class DropdownListComp extends Component {
	componentWillReceiveProps() {
		
	}
	render() {
		if (!this.props.isVisible) {
			return  this.props.inputedValue ==='' ? <p></p>: <p className='small'>Ничего не найдено</p>
		} else {
			const listItems = this.props.data.map((item, index) => {
				return <ButtonTag 	key={index.toString()} 
									text={item.text} 
									link={item.link} 
									index={item.index}
									selected={this.props.selected == index ? 'selected' : '' } />
			})
			return <ul className="autocomplete-ul">{listItems}</ul>			
		}
			
	}
}
function mapStateToProps (state) {
	return {
		...state.dropListReducer,
		inputedValue:state.autocompleteReducer.inputedValue
	}
}
function mapDispatchToProps () {
	return dispatch => {
		return {}
	}
}
export const DropdownList = connect(mapStateToProps, mapDispatchToProps)(DropdownListComp);




/*export const Hok = function list(Tag) {
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
}*/