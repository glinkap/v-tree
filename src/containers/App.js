import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as graphActions from '../actions/graphActions';
import Autocomplete from './autocomplete/autocompleteComp'
// import {render} from 'react-dom'
import logo from "../images/vitamin-tree-logo.png";
import './app.css';

export default class App extends Component {
	
	render() {
		return (
			<div className="container">				
				<img src={logo} className="logo" alt="logo" />	
				<Autocomplete 	/ >					
			</div>	
		)
	}
}

/*function mapStateToProps(state) {
	return {state};
}
function mapDispatchToProps(dispatch) {
	return {pageActions: bindActionCreators(graphActions, dispatch)};
}
export default connect(mapStateToProps,mapDispatchToProps)(App);*/