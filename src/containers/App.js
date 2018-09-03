import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as graphActions from '../actions/graphActions';
import Autocomplete from './autocomplete/autocompleteComp'
// import {render} from 'react-dom'
import logo from "../images/vitamin-tree-logo.png";
import './app.css';


class App extends Component {
	
	render() {
		return (
			<div className="container">				
{/*				<img src={logo} className="logo" alt="logo" />	*/}
				<Autocomplete />
				
			</div>	
		)
	}
}

export default connect( mapStateToProps => ({test: mapStateToProps}), mapDispatchToProps =>({}) )( App );