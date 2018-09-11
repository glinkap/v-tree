import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/autocompleteactions'; 
import {bindActionCreators} from 'redux';
class ButtonTag extends Component {
	render() {
		return <div className='listItem' onClick={this.props.clickFunc.bind( this, {link:this.props.link} )}>{this.props.text}</div>
	}
}
const mapDispatchToProps = (dispatch) => ({
		clickFunc: ({link}) => {
			dispatch(actions.showContent({link}));
		}
})
const mapStateToProps = (state) => ({
	autocompleteReducer:state.autocompleteReducer,
	dropListeReducer:state.dropListeReducer,
})
export default connect(mapStateToProps, mapDispatchToProps)(ButtonTag);