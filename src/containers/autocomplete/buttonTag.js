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
		this.props.tagClick({link:this.props.link, index:this.props.index});
	}
	render() {
		return <div className={`listItem ${this.props.selected}`} onClick={ this.tagClick } >{ this.props.text }</div>
	}
}
const mapDispatchToProps = (dispatch) => ({
		tagClick: ({link, index}) => {
			dispatch({type:'TAG_SELECTED', payload:{index:index, link}});

			// dispatch({type:'CONTENT_INITIAL_STATE'});
			// dispatch({type:'PRODUCT_INITIAL_STATE'});
			// dispatch(actions.showContent({link}));
		}
})
const mapStateToProps = (state) => ({
	// autocompleteReducer:state.autocompleteReducer,
	// dropListeReducer:state.dropListReducer,
})
export default connect(mapStateToProps, mapDispatchToProps)(ButtonTag);