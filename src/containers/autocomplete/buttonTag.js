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
		this.props.clickFunc({link:this.props.link, index:this.props.index});
	}
	render() {
		return <div className={`listItem ${this.props.selected}`} onClick={ this.tagClick } >{ this.props.text }</div>
	}
}
const mapDispatchToProps = (dispatch) => ({
		clickFunc: ({link, index}) => {
			dispatch(actions.showContent({link}));
			dispatch({type:'TAG_SELECTED', payload:{index:index}});
		}
})
const mapStateToProps = (state) => ({
	// autocompleteReducer:state.autocompleteReducer,
	// dropListeReducer:state.dropListReducer,
})
export default connect(mapStateToProps, mapDispatchToProps)(ButtonTag);