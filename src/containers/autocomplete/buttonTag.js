import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/autocompleteActions'; 
import {bindActionCreators} from 'redux';
import { showContent } from '../../actions/autocompleteActions';
class ButtonTag extends Component {

	constructor() {
		super();
		this.clickFunc = this.clickFunc.bind(this);
	}
	clickFunc(e) {
		// console.log("this.props", this.props);
		this.props.showContent2(e)
	}
	render() {
		return <div className='listItem' onClick={this.clickFunc}>{this.props.text}</div>
	}
}
const mapDispatchToProps = (dispatch) => ({
		showContent2: (e) => {
			dispatch(showContent(e));
		}
})
const mapStateToProps = (state) => ({
	autocompleteReducer:state.autocompleteReducer
})
export default connect(mapStateToProps, mapDispatchToProps)(ButtonTag);