import React, { Component } from 'react';
import {connect} from 'react-redux';


class Content extends Component {
	render() {
		if (this.props.contentReducer.isVisible) {
			return <div>{this.props.contentReducer.data}</div>	
		} else {
			return <div>Hide Content on Change input</div>
		}
	}
}

const mapDispatchToProps = (dispatch) => ({});
const mapStateToProps = (state) => ({
	contentReducer: state.contentReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);