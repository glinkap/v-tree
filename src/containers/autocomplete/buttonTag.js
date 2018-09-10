import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/autocompleteActions'; 
import {bindActionCreators} from 'redux';
import { showContent } from '../../actions/autocompleteActions';
class ButtonTag extends Component {
	render() {
		return <div className='listItem' onClick={this.props.clickFunc.bind(this, this.props.link)}>{this.props.text}</div>
	}
}
const mapDispatchToProps = (dispatch) => ({
		clickFunc: (link) => {
			dispatch(showContent(link));
		}
})
const mapStateToProps = (state) => ({
	autocompleteReducer:state.autocompleteReducer
})
export default connect(mapStateToProps, mapDispatchToProps)(ButtonTag);