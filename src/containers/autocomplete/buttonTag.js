import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/autocompleteactions'; 
// import {bindActionCreators} from 'redux';
class ButtonTag extends Component {
	constructor () {
		super();
		this.tagClick = this.tagClick.bind(this);
	}
	tagClick () {
		this.props.tagClick({	link:this.props.link, 
								index:this.props.index,
								prevSelected:this.props.prevSelected});
	}
	render() {
		return <div className={`listItem ${this.props.selected}`} onClick={ this.tagClick } >{ this.props.text }</div>
	}
}
const mapDispatchToProps = (dispatch) => ({
		tagClick: ({link, index, prevSelected}) => {
			if (index !== prevSelected) {
				dispatch({type:'TAG_SELECTED', payload:{ index:index, link }});
			}
		}
})
const mapStateToProps = (state) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(ButtonTag);