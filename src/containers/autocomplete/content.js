import React, { Component } from 'react';
import {connect} from 'react-redux';


class Content extends Component {
	render() {
		{
			if (this.props.contentReducer.isVisible === true) {
				return <div>контент</div>
				
			} else {
				return <div>нулина</div>
			}
		}
		
	}
}

const mapDispatchToProps = (dispatch) => ({});
const mapStateToProps = (state) => ({
	autocompleteReducer:state.autocompleteReducer,
	contentReducer: state.contentReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);